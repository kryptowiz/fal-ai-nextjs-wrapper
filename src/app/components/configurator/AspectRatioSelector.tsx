import { useConfiguration } from "./ConfigurationContext";
import { AspectRatio } from "./types";

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
];

export const AspectRatioSelector = () => {
	const { aspectRatio, setAspectRatio } = useConfiguration();

	return (
		<div className="mb-4">
			<label htmlFor="aspect-ratio" className="block mb-2 font-medium">
				Aspect Ratio
			</label>
			<select
				id="aspect-ratio"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={aspectRatio}
				onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
			>
				{aspectRatios.map((ratio) => (
					<option key={ratio.value} value={ratio.value}>
						{ratio.name}
					</option>
				))}
			</select>
		</div>
	);
};
