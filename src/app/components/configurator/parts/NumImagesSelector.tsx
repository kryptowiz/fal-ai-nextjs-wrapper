import { useGenerator } from "../../context";

export const NumImagesSelector = () => {
	const { numImages, setNumImages } = useGenerator();

	const handleNumImagesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setNumImages(parseInt(e.target.value));
	};

	return (
		<div className="mb-4">
			<label htmlFor="num-images" className="block mb-2 font-medium">
				Number of Images
			</label>
			<select
				id="num-images"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={numImages}
				onChange={handleNumImagesChange}
			>
				{[1, 2, 3, 4].map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
		</div>
	);
};
