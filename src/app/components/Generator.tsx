import { GeneratorProvider } from "./context";
import { ConfigurationPanel } from "./configurator";
import { ResultsDisplay } from "./results";

export const Generator = () => {
	return (
		<GeneratorProvider>
			<div className="flex flex-col md:flex-row gap-6 w-full dark:text-white">
				{/* Left side: Configuration */}
				<ConfigurationPanel />
				{/* Right side: Results */}
				<ResultsDisplay />
			</div>
		</GeneratorProvider>
	);
};
