import { GenerationTypeSelector } from "./GenerationTypeSelector";
import { ImageUpload } from "./ImageUpload";
import { AspectRatioSelector } from "./AspectRatioSelector";
import { PromptInput } from "./PromptInput";
import { ModelSelector } from "./ModelSelector";
import { SeedInput } from "./SeedInput";
import { GenerateButton } from "./GenerateButton";
import { NumInterferenceSelector } from "./NumInterferenceSelector";
import { CFGScale } from "./CFGScale";
import { NumImagesSelector } from "./NumImagesSelector";

export const ConfigurationPanel = () => {
	return (
		<div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
			<h2 className="text-xl font-bold mb-4">Configuration</h2>
			<GenerationTypeSelector />
			<PromptInput />
			<ImageUpload />
			<ModelSelector />
			<AspectRatioSelector />
			<SeedInput />
			<NumInterferenceSelector />
			<CFGScale />
			<NumImagesSelector />
			<GenerateButton />
		</div>
	);
};
