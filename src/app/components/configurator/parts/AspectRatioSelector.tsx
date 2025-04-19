import { useGenerator } from "../../context";
import { AspectRatio } from "../../types";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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

	return (
		<div>
			<Label htmlFor="aspect-ratio" className="block mb-4 font-medium">
				Aspect Ratio
			</Label>
			<Select
				value={aspectRatio}
				onValueChange={(value) => setAspectRatio(value as AspectRatio)}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select an aspect ratio" />
				</SelectTrigger>
				<SelectContent>
					{aspectRatios.map((ratio) => (
						<SelectItem key={ratio.value} value={ratio.value}>
							{ratio.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			{aspectRatio === "custom" && (
				<div className="flex items-center space-x-2 mt-4">
					<div className="flex flex-col w-full">
						<Label htmlFor="custom-width" className="mb-2">
							Width
						</Label>
						<Input
							type="number"
							id="custom-width"
							placeholder="Width"
							className="w-full"
							value={customWidth}
							onChange={(e) =>
								setCustomWidth(
									e.target.value === "" ? 0 : parseInt(e.target.value)
								)
							}
						/>
					</div>
					<div className="flex flex-col w-full">
						<Label htmlFor="custom-height" className="mb-2">
							Height
						</Label>
						<Input
							type="number"
							id="custom-height"
							placeholder="Height"
							className="w-full"
							value={customHeight}
							onChange={(e) =>
								setCustomHeight(
									e.target.value === "" ? 0 : parseInt(e.target.value)
								)
							}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
