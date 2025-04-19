import { useConfiguration } from "./ConfigurationContext";
import { Model } from "./types";

const models = [
	{
		name: "Flux dev",
		value: "fal-ai/flux/dev",
	},
	{
		name: "Hidream-i1-dev",
		value: "fal-ai/hidream-i1-dev",
	},
	{
		name: "Hidream-i1-fast",
		value: "fal-ai/hidream-i1-fast",
	},
];

export const ModelSelector = () => {
	const { model, setModel } = useConfiguration();

	return (
		<div className="mb-4">
			<label htmlFor="model" className="block mb-2 font-medium">
				Model
			</label>
			<select
				id="model"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				value={model}
				onChange={(e) => setModel(e.target.value as Model)}
			>
				{models.map((model) => (
					<option key={model.value} value={model.value}>
						{model.name}
					</option>
				))}
			</select>
		</div>
	);
};
