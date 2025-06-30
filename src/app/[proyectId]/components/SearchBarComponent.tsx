"use client";

import ChevronIconComponent from "@/components/ChevronIconComponent";
import { Colors } from "@/constants/colors";
import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const SearchBarComponent = () => {
	const router = useRouter();

	const handleonBack = () => router.back();

	return (
		<HStack flexDirection="row" alignItems="center">
			<HStack onClick={handleonBack} cursor="pointer">
				<ChevronIconComponent rotationDeg={90} height={16} width={16} />
				<Text fontSize="12px" lineHeight="16px" color="textGreen8">
					Atrás
				</Text>
			</HStack>
			<HStack justify="start">
				<Text fontSize="12px" lineHeight="16px" color="textGrey8" cursor="pointer" onClick={handleonBack}>
					Buscador Proyectos
				</Text>
				<Text fontSize="12px" lineHeight="16px" color="textGrey8">
					/
				</Text>
				<Text fontSize="12px" lineHeight="16px" color="allGrey9" fontWeight="semibold">
					Diseña una app movil para un SaaS de contabilidad
				</Text>
			</HStack>
		</HStack>
	);
};
export default SearchBarComponent;
