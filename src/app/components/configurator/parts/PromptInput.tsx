import { useGenerator } from "../../context";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const PromptInput = () => {
	const { prompt, setPrompt } = useGenerator();

	return (
		<div>
			<Label htmlFor="prompt" className="block mb-4 font-medium">
				Prompt
			</Label>
			<Textarea
				id="prompt"
				rows={10}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				placeholder="Describe what you want to generate..."
			/>
		</div>
	);
};
