import { useGenerator } from "../../context";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const NumInterferenceSelector = () => {
	const { numInferenceSteps, setNumInferenceSteps } = useGenerator();

	const handleNumInferenceStepsChange = (value: number[]) => {
		setNumInferenceSteps(value[0]);
	};

	return (
		<div>
			<div className="flex items-center justify-between">
				<Label htmlFor="num-inference-steps" className="block mb-4 font-medium">
					Number of Inference Steps
				</Label>
				<Label htmlFor="num-inference-steps" className="block mb-4 font-medium">
					{numInferenceSteps}
				</Label>
			</div>
			<Slider
				id="num-inference-steps"
				defaultValue={[numInferenceSteps]}
				onValueChange={handleNumInferenceStepsChange}
				min={1}
				max={150}
				step={1}
			/>
		</div>
	);
};
