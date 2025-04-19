import { useGenerator } from "../../context";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const CFGScale = () => {
	const { guidanceScale, setGuidanceScale } = useGenerator();

	const handleGuidanceScaleChange = (value: number[]) => {
		setGuidanceScale(value[0]);
	};

	return (
		<div>
			<div className="flex items-center justify-between">
				<Label htmlFor="guidance-scale" className="block mb-4 font-medium">
					CFG Scale
				</Label>
				<Label htmlFor="guidance-scale" className="block mb-4 font-medium">
					{guidanceScale}
				</Label>
			</div>
			<Slider
				id="guidance-scale"
				defaultValue={[guidanceScale]}
				onValueChange={handleGuidanceScaleChange}
				min={0}
				max={20}
				step={0.5}
			/>
		</div>
	);
};
