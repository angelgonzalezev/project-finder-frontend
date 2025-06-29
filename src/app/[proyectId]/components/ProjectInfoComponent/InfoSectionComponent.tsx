import { Stack, Text } from "@chakra-ui/react";
import React from "react";

interface InfoSectionComponentProps {
	title: string;
	isMain?: boolean;
	children: React.ReactNode;
}
const InfoSectionComponent = ({ title, children, isMain = false }: InfoSectionComponentProps) => {
	return (
		<Stack mt={isMain ? "40px" : "24px"}>
			<Text fontSize={isMain ? "18px" : "16px"} lineHeight={isMain ? "26px" : "22px"}>
				{title}
			</Text>
			{children}
		</Stack>
	);
};
export default InfoSectionComponent;
