"use client";

import { ConfigurationProvider } from "./components/configurator/ConfigurationContext";
import { ConfigurationPanel } from "./components/configurator/ConfigurationPanel";
import { ResultsDisplay } from "./components/ResultsDisplay";

export default function Home() {
	return (
		<ConfigurationProvider>
			<div className="flex flex-col md:flex-row gap-6 w-full dark:text-white">
				{/* Left side: Configuration */}
				<ConfigurationPanel />

				{/* Right side: Results */}
				<ResultsDisplay />
			</div>
		</ConfigurationProvider>
	);
}
