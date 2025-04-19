import { useGenerator } from "../../context";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const SeedInput = () => {
	const { seed, setSeed } = useGenerator();

	const isRandomizeChecked = seed === null;

	const handleSeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSeed(value === "" ? null : parseInt(value));
	};

	return (
		<div>
			<Label htmlFor="seed" className="block mb-4 font-medium">
				Seed
			</Label>
			<div className="flex items-center space-x-2">
				<Input
					id="seed"
					type="number"
					value={seed === null ? "" : seed}
					onChange={handleSeedChange}
					disabled={isRandomizeChecked}
				/>
				<Label htmlFor="randomize" className="font-medium flex items-center">
					<Checkbox
						id="randomize"
						checked={isRandomizeChecked}
						onCheckedChange={(checked) => {
							if (checked) {
								setSeed(null);
							} else {
								setSeed(Math.floor(Math.random() * 1000000));
							}
						}}
					/>
					<span className="ml-2">Randomize</span>
				</Label>
			</div>
		</div>
	);
};
