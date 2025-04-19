import { useGenerator } from "../../context";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const NumImagesSelector = () => {
	const { numImages, setNumImages } = useGenerator();

	const handleNumImagesChange = (value: string) => {
		setNumImages(parseInt(value));
	};

	return (
		<div>
			<Label htmlFor="num-images" className="block mb-4 font-medium">
				Number of Images
			</Label>
			<ToggleGroup
				defaultValue={numImages.toString()}
				type="single"
				onValueChange={handleNumImagesChange}
				size="lg"
			>
				{[1, 2, 3, 4].map((num) => (
					<ToggleGroupItem size="lg" key={num} value={num.toString()}>
						{num}
					</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	);
};
