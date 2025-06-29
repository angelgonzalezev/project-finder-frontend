"use client";

import { Colors } from "@/constants/colors";
import { HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import ArrowIcon from "@/assets/icons/ArrowIcon.svg";
import FilterIcon from "@/assets/icons/FilterIcon.svg";
import FilterModalComponent from "./FilterModalComponent";
import { FilterType } from "@/types/filters";

interface FilterOptionsCOmponentProps {
	onFilter: (e: { filters: FilterType[]; order: string | null }) => void;
}
const FilterOptionsComponent = (props: FilterOptionsCOmponentProps) => {
	const { onFilter } = props;
	const { open, onOpen, onClose } = useDisclosure();

	return (
		<Stack flexDirection="row" alignItems="center" justifyContent="flex-end">
			<HStack w="fit-content" px="8px" cursor="pointer" onClick={onOpen}>
				<Image src={FilterIcon} alt="button icon" width={16} height={16} />
				<Text color={Colors.TextGreen8} fontSize="12px">
					Filtrar
				</Text>
			</HStack>
			<HStack
				w="fit-content"
				px="8px"
				py="6px"
				borderWidth="1px"
				borderColor={Colors.TextGreen8}
				borderRadius="6px"
				cursor="pointer"
			>
				<Image src={ArrowIcon} alt="button icon" width={16} height={16} />
				<Text color={Colors.TextGreen8} fontSize="12px">
					publicación
				</Text>
			</HStack>
			<FilterModalComponent open={open} onClose={onClose} onFilter={onFilter} />
		</Stack>
	);
};
export default FilterOptionsComponent;
