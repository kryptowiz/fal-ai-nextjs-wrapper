import { useGenerator } from "../context";

export const PromptInput = () => {
	const { prompt, setPrompt } = useGenerator();

	return (
		<div className="mb-4">
			<label htmlFor="prompt" className="block mb-2 font-medium">
				Prompt
			</label>
			<textarea
				id="prompt"
				className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
				rows={10}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				placeholder="Describe what you want to generate..."
			/>
		</div>
	);
};
