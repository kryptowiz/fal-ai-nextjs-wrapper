import { Video } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { useGenerator } from "../../context";

export const GenerationTypeSelector = () => {
	const { generationType, setGenerationType } = useGenerator();

	// Disable this for now because I'm lazy.
	return null;

	return (
		<div>
			<label className="block mb-2 font-medium">Generation Type</label>
			<div className="flex gap-2">
				<button
					className={`flex items-center gap-2 px-4 py-2 rounded-md ${
						generationType === "text-to-image"
							? "bg-blue-500 text-white"
							: "bg-gray-200 dark:bg-gray-700"
					}`}
					onClick={() => setGenerationType("text-to-image")}
				>
					<ImageIcon />
				</button>
				<button
					className={`flex items-center gap-2 px-4 py-2 rounded-md ${
						generationType === "image-to-video"
							? "bg-blue-500 text-white"
							: "bg-gray-200 dark:bg-gray-700"
					}`}
					onClick={() => setGenerationType("image-to-video")}
				>
					<Video />
				</button>
			</div>
		</div>
	);
};
