"use client";

import { defineTextStyles } from "@chakra-ui/react";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { colors } from "@/theme/colors";
import { textStylesTheme } from "@/theme/textStyles";

export const textStyles = defineTextStyles(textStylesTheme);

const config = defineConfig({
	theme: {
		textStyles,
		tokens: {
			colors: colors,
		},
	},
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
