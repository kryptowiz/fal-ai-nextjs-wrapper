import { useGenerator } from "../../context";
import { Button } from "@/components/ui/button";

export const GenerateButton = () => {
	const { handleGenerate, isGenerating } = useGenerator();

	return (
		<Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
			{isGenerating ? "Generating..." : "Generate"}
		</Button>
	);
};
