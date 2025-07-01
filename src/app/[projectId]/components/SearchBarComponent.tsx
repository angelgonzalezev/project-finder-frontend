"use client";

import ChevronIconComponent from "@/components/ChevronIconComponent";
import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface SearchBarComponent {
	title: string;
}
const SearchBarComponent = (props: SearchBarComponent) => {
	const { title } = props;
	const router = useRouter();

	const handleonBack = () => router.back();

	return (
		<HStack flexDirection="row" alignItems="start" align={{ base: "start", md: "center" }}>
			<HStack onClick={handleonBack} cursor="pointer" align="center">
				<ChevronIconComponent rotationDeg={90} height={16} width={16} />
				<Text textStyle="regularXs" color="textGreen8">
					Atrás
				</Text>
			</HStack>
			<HStack justify="start" textStyle="regularXs" align={{ base: "start", md: "center" }}>
				<Text color="textGrey8" cursor="pointer" onClick={handleonBack} w="fit-content">
					Buscador Proyectos
				</Text>
				<Text fontSize="12px" lineHeight="16px" color="textGrey8">
					/
				</Text>
				<Text textStyle="boldXs" fontStyle="italic" color="allGrey9" flex="1">
					{title}
				</Text>
			</HStack>
		</HStack>
	);
};
export default SearchBarComponent;
