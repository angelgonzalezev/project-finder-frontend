"use client";

import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import CloseIcon from "@/assets/icons/CloseIcon.svg";
import Image from "next/image";
import CustomModalContainer from "./CustomModalContainer";
import MotionBoxContainer from "./MotionBoxContainer";
import { Colors } from "@/constants/colors";

interface CustomModalComponentProps {
	isOpen: boolean;
	onClose: () => void;
	onFilter: () => void;
	title: string;
	children: React.ReactNode;
}

const CustomModalComponent = ({ isOpen, onClose, onFilter, title, children }: CustomModalComponentProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<CustomModalContainer onClose={onClose}>
					<MotionBoxContainer>
						<HStack justifyContent="end">
							<Button onClick={onClose}>
								<Image src={CloseIcon} alt="close icon" width={16} height={16} />
							</Button>
						</HStack>
						<Stack px="40px" pb="40px" w="100%">
							{title && (
								<Text fontSize="xl" fontWeight="bold" mb={4}>
									{title}
								</Text>
							)}
							<Stack gap="24px">{children}</Stack>
							<HStack>
								<Button mt={6} onClick={onClose} colorScheme="blue" fontSize="16px" flex={1} color="red">
									Eliminar Filtros
								</Button>
								<Button mt={6} onClick={onFilter} fontSize="16px" bgColor={Colors.TextGreen8} color="white" flex={1}>
									Filtrar
								</Button>
							</HStack>
						</Stack>
					</MotionBoxContainer>
				</CustomModalContainer>
			)}
		</AnimatePresence>
	);
};
export default CustomModalComponent;
