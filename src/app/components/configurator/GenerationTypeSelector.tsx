import { Video } from "lucide-react";

import { ImageIcon } from "lucide-react";
import { useConfiguration } from "./ConfigurationContext";

export const GenerationTypeSelector = () => {
	const { generationType, setGenerationType } = useConfiguration();

	return (
		<div className="mb-4">
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
