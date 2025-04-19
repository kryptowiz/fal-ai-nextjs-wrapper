import { useGenerator } from "../../context";
import { Model } from "../../types";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

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
	const { model, setModel } = useGenerator();

	return (
		<div>
			<Label htmlFor="model" className="block mb-4 font-medium">
				Model
			</Label>
			<Select value={model} onValueChange={(value) => setModel(value as Model)}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a model" />
				</SelectTrigger>
				<SelectContent>
					{models.map((model) => (
						<SelectItem key={model.value} value={model.value}>
							{model.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
