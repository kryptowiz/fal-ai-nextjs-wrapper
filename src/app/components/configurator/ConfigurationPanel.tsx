import { GenerationTypeSelector } from "./parts/GenerationTypeSelector";
import { ImageUpload } from "./parts/ImageUpload";
import { AspectRatioSelector } from "./parts/AspectRatioSelector";
import { PromptInput } from "./parts/PromptInput";
import { ModelSelector } from "./parts/ModelSelector";
import { SeedInput } from "./parts/SeedInput";
import { GenerateButton } from "./parts/GenerateButton";
import { NumInterferenceSelector } from "./parts/NumInterferenceSelector";
import { CFGScale } from "./parts/CFGScale";
import { NumImagesSelector } from "./parts/NumImagesSelector";

export const ConfigurationPanel = () => {
	return (
		<div className="w-full md:w-1/2 p-4 space-y-8">
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
