import { useGenerator } from "../context";

export const GenerateButton = () => {
	const { handleGenerate, isGenerating } = useGenerator();

	return (
		<button
			onClick={handleGenerate}
			disabled={isGenerating}
			className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
		>
			{isGenerating ? "Generating..." : "Generate"}
		</button>
	);
};
