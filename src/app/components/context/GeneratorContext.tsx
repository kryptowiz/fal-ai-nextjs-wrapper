import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { AspectRatio, GenerationType, Model } from "../types";
import { fal } from "@fal-ai/client";

interface GeneratorContextType {
	// Generation type
	generationType: GenerationType;
	setGenerationType: (type: GenerationType) => void;

	// Prompt
	prompt: string;
	setPrompt: (prompt: string) => void;

	// Image upload
	selectedImage: File | null;
	setSelectedImage: (file: File | null) => void;

	// Model
	model: Model;
	setModel: (model: Model) => void;

	// Aspect ratio
	aspectRatio: AspectRatio;
	setAspectRatio: (ratio: AspectRatio) => void;

	// Custom width
	customWidth: number;
	setCustomWidth: (width: number) => void;

	// Custom height
	customHeight: number;
	setCustomHeight: (height: number) => void;

	// Seed
	seed: number | null;
	setSeed: (seed: number | null) => void;

	// Number of inference steps
	numInferenceSteps: number;

	// Set number of inference steps
	setNumInferenceSteps: (steps: number) => void;

	// Guidance scale
	guidanceScale: number;

	// Set guidance scale
	setGuidanceScale: (scale: number) => void;

	// Number of images
	numImages: number;

	// Set number of images
	setNumImages: (num: number) => void;

	// Generation state
	isGenerating: boolean;

	// Generate function
	handleGenerate: () => void;

	// Result
	generatedImageUrls: string[];
}

// Create context with default values
const GeneratorContext = createContext<GeneratorContextType | undefined>(
	undefined
);

const examplePrompt = "Cute cat";

export const GeneratorProvider = ({ children }: { children: ReactNode }) => {
	// States for all configuration options
	const [generationType, setGenerationType] =
		useState<GenerationType>("text-to-image");
	const [prompt, setPrompt] = useState(examplePrompt);
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [model, setModel] = useState<Model>("fal-ai/flux/dev");
	const [aspectRatio, setAspectRatio] = useState<AspectRatio>("square");
	const [seed, setSeed] = useState<number | null>(null);
	const [numInferenceSteps, setNumInferenceSteps] = useState<number>(28);
	const [guidanceScale, setGuidanceScale] = useState<number>(3.5);
	const [numImages, setNumImages] = useState<number>(1);
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImageUrls, setGeneratedImageUrls] = useState<string[]>([]);
	const [customWidth, setCustomWidth] = useState<number>(1024);
	const [customHeight, setCustomHeight] = useState<number>(1024);

	// Initialize fal client
	useEffect(() => {
		fal.config({
			proxyUrl: "/api/fal/proxy",
		});
	}, []);

	// Handle generation
	const handleGenerate = async () => {
		setIsGenerating(true);
		try {
			// Create payload
			let imageSize;
			if (aspectRatio === "custom") {
				if (
					customWidth &&
					customHeight &&
					customWidth > 100 &&
					customHeight > 100
				) {
					imageSize = { width: customWidth, height: customHeight };
				} else {
					console.warn(
						"Custom width and height must be greater than 100. Using default square aspect ratio."
					);
					imageSize = "square";
				}
			} else {
				imageSize = aspectRatio;
			}

			const payload = {
				prompt,
				image_size: imageSize,
				num_interference_steps: numInferenceSteps,
				guidance_scale: guidanceScale,
				num_images: numImages,
				enable_safety_checker: false,
				seed,
			};

			// Call fal.ai
			const result = await fal.subscribe(model, {
				input: payload,
				pollInterval: 5000,
				logs: true,
				onQueueUpdate(update) {
					console.log("Queue update:", update);
				},
			});

			// Extract the image URL from the result
			if (result.data.images && result.data.images.length > 0) {
				const newImageUrls = result.data.images.map(
					(image: { url: string }) => image.url
				);
				setGeneratedImageUrls((prevImageUrls) => [
					...prevImageUrls,
					...newImageUrls,
				]);
			}
		} catch (error) {
			console.error("Error generating image:", error);
		} finally {
			setIsGenerating(false);
		}
	};

	const value = {
		// Generation type
		generationType,
		setGenerationType,
		// Prompt
		prompt,
		setPrompt,
		// Image upload
		selectedImage,
		setSelectedImage,
		// Model
		model,
		setModel,
		// Aspect ratio
		aspectRatio,
		setAspectRatio,
		// Custom width
		customWidth,
		setCustomWidth,
		// Custom height
		customHeight,
		setCustomHeight,
		// Seed
		seed,
		setSeed,
		// Number of inference steps
		numInferenceSteps,
		setNumInferenceSteps,
		// Guidance scale
		guidanceScale,
		setGuidanceScale,
		// Number of images
		numImages,
		setNumImages,
		// Generation state
		isGenerating,
		// Generate function
		handleGenerate,
		// Result
		generatedImageUrls,
	};

	return (
		<GeneratorContext.Provider value={value}>
			{children}
		</GeneratorContext.Provider>
	);
};

// Custom hook for using the context
export const useGenerator = () => {
	const context = useContext(GeneratorContext);
	if (context === undefined) {
		throw new Error("useGenerator must be used within a GeneratorProvider");
	}
	return context;
};
