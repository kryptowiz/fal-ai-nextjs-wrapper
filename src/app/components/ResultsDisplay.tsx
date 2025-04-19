import { useConfiguration } from "./configurator/ConfigurationContext";

export const ResultsDisplay = () => {
	const { generatedImageUrl, isGenerating } = useConfiguration();

	return (
		<div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
			<h2 className="text-xl font-bold mb-4">Results</h2>

			<div className="flex items-center justify-center min-h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg">
				{isGenerating ? (
					<div className="text-center">
						<p className="mb-2">Generating image...</p>
						<div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
					</div>
				) : generatedImageUrl ? (
					<img
						src={generatedImageUrl}
						alt="Generation"
						className="max-w-full max-h-[600px] rounded-lg"
					/>
				) : (
					<p className="text-gray-500">Generated image will appear here</p>
				)}
			</div>
		</div>
	);
};
