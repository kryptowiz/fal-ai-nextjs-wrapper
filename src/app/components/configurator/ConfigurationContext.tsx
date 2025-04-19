import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { AspectRatio, GenerationType, Model } from "./types";
import { fal } from "@fal-ai/client";

// Define types

interface ConfigurationContextType {
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
	generatedImageUrl: string | null;
}

// Create context with default values
const ConfigurationContext = createContext<
	ConfigurationContextType | undefined
>(undefined);

const examplePrompt = "Cute cat";

// Provider component
export const ConfigurationProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	// States for all configuration options
	const [generationType, setGenerationType] =
		useState<GenerationType>("text-to-image");
	const [prompt, setPrompt] = useState(examplePrompt);
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [model, setModel] = useState<Model>("fal-ai/flux/dev");
	const [aspectRatio, setAspectRatio] = useState<AspectRatio>("square");
	const [seed, setSeed] = useState<number>(Math.floor(Math.random() * 1000000));
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
		null
	);

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

			console.log(model);
			console.log(payload);

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
				setGeneratedImageUrl(result.data.images[0].url);
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
		generatedImageUrl,
	};

	return (
		<ConfigurationContext.Provider value={value}>
			{children}
		</ConfigurationContext.Provider>
	);
};

// Custom hook for using the context
export const useConfiguration = () => {
	const context = useContext(ConfigurationContext);
	if (context === undefined) {
		throw new Error(
			"useConfiguration must be used within a ConfigurationProvider"
		);
	}
	return context;
};
