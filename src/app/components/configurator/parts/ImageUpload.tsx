import { useGenerator } from "../../context";

export const ImageUpload = () => {
	const { setSelectedImage, generationType } = useGenerator();

	if (generationType !== "image-to-video") {
		return null;
	}

	return (
		<div>
			<label className="block mb-2 font-medium">Upload Image</label>
			<input
				type="file"
				accept="image/*"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
			/>
		</div>
	);
};
