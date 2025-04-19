import { useGenerator } from "../context";

export const ResultsDisplay = () => {
	const { generatedImageUrls, isGenerating } = useGenerator();

	return (
		<div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
			<h2 className="text-xl font-bold mb-4">Results</h2>

			<div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg">
				{generatedImageUrls.length > 0 && (
					<div className="grid grid-cols-2 gap-4">
						{generatedImageUrls.map((url, index) => (
							<img
								key={index}
								src={url}
								alt={`Generated image ${index + 1}`}
								className="max-w-full max-h-[300px] rounded-lg object-cover"
							/>
						))}
					</div>
				)}

				{isGenerating ? (
					<div className="text-center mt-4">
						<p className="mb-2">Generating image...</p>
						<div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
					</div>
				) : generatedImageUrls.length === 0 ? (
					<p className="text-gray-500">Generated image will appear here</p>
				) : null}
			</div>
		</div>
	);
};
