import { useGenerator } from "../context";
import { Skeleton } from "@/components/ui/skeleton";

export const ResultsDisplay = () => {
	const { generatedImageUrls, isGenerating, numImages, aspectRatio } =
		useGenerator();

	const calculateAspectRatioClass = () => {
		switch (aspectRatio) {
			case "square":
			case "square_hd":
				return "aspect-square";
			case "portrait_4_3":
				return "aspect-[3/4]";
			case "portrait_9_16":
				return "aspect-[9/16]";
			case "landscape_4_3":
				return "aspect-[4/3]";
			case "landscape_16_9":
				return "aspect-[16/9]";
			default:
				// Default to square if custom or unknown
				return "aspect-square";
		}
	};

	const aspectRatioClass = calculateAspectRatioClass();

	const numberOfSkeletons = isGenerating ? numImages : 0;

	return (
		<div className="w-full md:w-1/2 p-4 space-y-4">
			<h2 className="text-xl font-bold">Results</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{/* Skeletons during generation */}
				{isGenerating &&
					[...Array(numberOfSkeletons)]
						.map((_, i) => (
							<Skeleton
								key={`skeleton-${i}`}
								className={`rounded-lg w-full ${aspectRatioClass}`}
							/>
						))
						.reverse()}

				{/* Existing Images */}
				{generatedImageUrls
					.map((url, index) => (
						<img
							key={index}
							src={url}
							alt={`Generated image ${index + 1}`}
							className="w-full rounded-lg object-cover"
						/>
					))
					.reverse()}
			</div>
		</div>
	);
};
