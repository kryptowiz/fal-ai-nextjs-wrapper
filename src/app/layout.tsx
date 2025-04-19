import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	title: "AI Image Wrapper",
	description: "Test out different AI image models",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					forcedTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-5xl mx-auto py-4">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
