import { useGenerator } from "../context";
import { AspectRatio } from "../types";

const aspectRatios = [
	{
		name: "1:1 (Square)",
		value: "square",
	},
	{
		name: "1:1 (Square HD)",
		value: "square_hd",
	},
	{
		name: "4:3 (Portrait)",
		value: "portrait_4_3",
	},
	{
		name: "9:16 (Portrait)",
		value: "portrait_9_16",
	},
	{
		name: "4:3 (Landscape)",
		value: "landscape_4_3",
	},
	{
		name: "16:9 (Landscape)",
		value: "landscape_16_9",
	},
	{
		name: "Custom",
		value: "custom",
	},
];

export const AspectRatioSelector = () => {
	const {
		aspectRatio,
		setAspectRatio,
		customWidth,
		setCustomWidth,
		customHeight,
		setCustomHeight,
	} = useGenerator();

	const handleAspectRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setAspectRatio(e.target.value as AspectRatio);
	};

	return (
		<div className="mb-4">
			<label htmlFor="aspect-ratio" className="block mb-2 font-medium">
				Aspect Ratio
			</label>
			<select
				id="aspect-ratio"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={aspectRatio}
				onChange={handleAspectRatioChange}
			>
				{aspectRatios.map((ratio) => (
					<option key={ratio.value} value={ratio.value}>
						{ratio.name}
					</option>
				))}
			</select>

			{aspectRatio === "custom" && (
				<div className="flex space-x-2 mt-2">
					<input
						type="number"
						placeholder="Width"
						className="w-1/2 p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
						value={customWidth}
						onChange={(e) =>
							setCustomWidth(
								e.target.value === "" ? 0 : parseInt(e.target.value)
							)
						}
					/>
					<input
						type="number"
						placeholder="Height"
						className="w-1/2 p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
						value={customHeight}
						onChange={(e) =>
							setCustomHeight(
								e.target.value === "" ? 0 : parseInt(e.target.value)
							)
						}
					/>
				</div>
			)}
		</div>
	);
};
