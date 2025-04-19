import { useGenerator } from "../../context";

export const SeedInput = () => {
	const { seed, setSeed } = useGenerator();

	const isRandomizeChecked = seed === null;

	const handleRandomizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setSeed(null);
		} else {
			setSeed(Math.floor(Math.random() * 1000000));
		}
	};

	const handleSeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSeed(value === "" ? null : parseInt(value));
	};

	return (
		<div className="mb-4">
			<label htmlFor="seed" className="block mb-2 font-medium">
				Seed
			</label>
			<div className="flex items-center space-x-2">
				<input
					id="seed"
					type="number"
					className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
					value={seed === null ? "" : seed}
					onChange={handleSeedChange}
					disabled={isRandomizeChecked}
				/>
				<label htmlFor="randomize" className="font-medium">
					<input
						id="randomize"
						type="checkbox"
						className="mr-1"
						checked={isRandomizeChecked}
						onChange={handleRandomizeChange}
					/>
					Randomize
				</label>
			</div>
		</div>
	);
};
