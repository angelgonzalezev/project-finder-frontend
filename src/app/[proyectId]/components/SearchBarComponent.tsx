"use client";

import ChevronIconComponent from "@/components/ChevronIconComponent";
import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const SearchBarComponent = () => {
	const router = useRouter();

	const handleonBack = () => router.back();

	return (
		<HStack flexDirection="row" alignItems="center">
			<HStack onClick={handleonBack} cursor="pointer">
				<ChevronIconComponent rotationDeg={90} height={16} width={16} />
				<Text textStyle="regularXs" color="textGreen8">
					Atrás
				</Text>
			</HStack>
			<HStack justify="start" textStyle="regularXs">
				<Text color="textGrey8" cursor="pointer" onClick={handleonBack}>
					Buscador Proyectos
				</Text>
				<Text fontSize="12px" lineHeight="16px" color="textGrey8">
					/
				</Text>
				<Text textStyle="boldXs" fontStyle="italic" color="allGrey9">
					Diseña una app movil para un SaaS de contabilidad
				</Text>
			</HStack>
		</HStack>
	);
};
export default SearchBarComponent;
