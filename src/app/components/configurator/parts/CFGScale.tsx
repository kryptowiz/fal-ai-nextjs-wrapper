import { useGenerator } from "../../context";

export const CFGScale = () => {
	const { guidanceScale, setGuidanceScale } = useGenerator();

	const handleGuidanceScaleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setGuidanceScale(parseFloat(e.target.value));
	};

	return (
		<div className="mb-4">
			<label htmlFor="guidance-scale" className="block mb-2 font-medium">
				CFG Scale
			</label>
			<input
				type="number"
				id="guidance-scale"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={guidanceScale}
				onChange={handleGuidanceScaleChange}
				min="0"
				max="20"
				step="0.5"
			/>
		</div>
	);
};
