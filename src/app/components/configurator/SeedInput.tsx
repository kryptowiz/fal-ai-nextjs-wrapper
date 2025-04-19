import { useConfiguration } from "./ConfigurationContext";

export const SeedInput = () => {
	const { seed, setSeed } = useConfiguration();

	return (
		<div className="mb-4">
			<label htmlFor="seed" className="block mb-2 font-medium">
				Seed
			</label>
			<input
				id="seed"
				type="number"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={seed}
				onChange={(e) => setSeed(parseInt(e.target.value) || 0)}
			/>
		</div>
	);
};
