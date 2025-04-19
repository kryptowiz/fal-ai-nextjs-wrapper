import { useGenerator } from "../context";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const ResultsDisplay = () => {
	const { generatedImageUrls, isGenerating, numImages, aspectRatio } =
		useGenerator();

	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const calculateAspectRatioClass = () => {
		switch (aspectRatio) {
			case "square":
			case "square_hd":
				return "aspect-square";
			case "portrait_4_3":
				return "aspect-[3/4]";
			case "portrait_16_9":
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
			{generatedImageUrls.length === 0 && !isGenerating ? (
				<div className="flex flex-col items-center justify-center h-full bg-dotted-neutral-200 rounded-lg p-8">
					<h1 className="font-bold text-2xl text-center">
						Your images will appear here ✨
					</h1>
					<p className="text-center text-gray-500">
						Configure your settings and click generate to see results.
					</p>
				</div>
			) : (
				<>
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
								<div key={index}>
									<img
										src={url}
										alt={`Generated image ${index + 1}`}
										className="w-full rounded-lg object-cover cursor-pointer"
										onClick={() => {
											setSelectedImage(url);
											setOpen(true);
										}}
									/>
								</div>
							))
							.reverse()}
					</div>

					<Dialog open={open} onOpenChange={setOpen}>
						<DialogContent className="sm:max-w-[425px]">
							<DialogTitle>Selected Image</DialogTitle>
							{selectedImage && (
								<img
									src={selectedImage}
									alt="Selected Image"
									className="w-full object-cover"
								/>
							)}
						</DialogContent>
					</Dialog>
				</>
			)}
		</div>
	);
};
