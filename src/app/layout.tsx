import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "../components/ui/provider";
import { Stack } from "@chakra-ui/react";
import HeaderComponent from "@/components/HeaderComponent";
import localFont from "next/font/local";

const gtPlanarRegularFont = localFont({
	src: "../fonts/GT-Planar-Regular.otf",
});

export const metadata: Metadata = {
	title: "Landing de proyectos",
	description: "A full stack talent challenge",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={gtPlanarRegularFont.className}>
				<Provider>
					<Stack flex={1} pt="140px">
						<HeaderComponent />
						<Stack flex={1} px="40px" gap="40px">
							{children}
						</Stack>
					</Stack>
				</Provider>
			</body>
		</html>
	);
}
