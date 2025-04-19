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

	// Seed
	seed: number;
	setSeed: (seed: number) => void;

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
	const [seed, setSeed] = useState<number>(Math.floor(Math.random() * 1000000));
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImageUrls, setGeneratedImageUrls] = useState<string[]>([]);

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
			const payload = {
				prompt,
				image_size: aspectRatio,
				num_interference_steps: 28,
				guidance_scale: 3.5,
				num_images: 1,
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

			console.log("Result:", result);

			// Extract the image URL from the result
			if (result.data.images && result.data.images[0]) {
				setGeneratedImageUrls((prevImageUrls) => [
					...prevImageUrls,
					result.data.images[0].url,
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
		// Seed
		seed,
		setSeed,
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
