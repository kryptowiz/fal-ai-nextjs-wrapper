import { useGenerator } from "../../context";

export const NumInterferenceSelector = () => {
	const { numInferenceSteps, setNumInferenceSteps } = useGenerator();

	const handleNumInferenceStepsChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setNumInferenceSteps(parseInt(e.target.value));
	};

	return (
		<div className="mb-4">
			<label htmlFor="num-inference-steps" className="block mb-2 font-medium">
				Number of Inference Steps
			</label>
			<input
				type="number"
				id="num-inference-steps"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={numInferenceSteps}
				onChange={handleNumInferenceStepsChange}
				min="1"
				max="150"
				step="1"
			/>
		</div>
	);
};
