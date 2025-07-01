"use client";

import { HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import ArrowIcon from "@/assets/icons/ArrowIcon.svg";
import FilterIcon from "@/assets/icons/FilterIcon.svg";
import FilterModalComponent from "./FilterModalComponent";
import { FilterType } from "@/types/filters";

interface FilterOptionsCOmponentProps {
	onFilter: (e: { filters: FilterType[]; order: string | null }) => void;
	onClean: () => void;
}
const FilterOptionsComponent = (props: FilterOptionsCOmponentProps) => {
	const { onFilter, onClean } = props;
	const { open, onOpen, onClose } = useDisclosure();

	const handleOnClean = () => {
		onClean();
		onClose();
	};

	return (
		<Stack flexDirection="row" alignItems="center" justifyContent="flex-end">
			<HStack w="fit-content" px="8px" cursor="pointer" onClick={onOpen}>
				<Image src={FilterIcon} alt="button icon" width={16} height={16} />
				<Text color="textGreen8" textStyle="regularXs">
					Filtrar
				</Text>
			</HStack>
			<HStack
				w="fit-content"
				px="8px"
				py="6px"
				borderWidth="1px"
				borderColor="textGreen8"
				borderRadius="6px"
				cursor="pointer"
			>
				<Image src={ArrowIcon} alt="button icon" width={16} height={16} />
				<Text color="textGreen8" textStyle="regularXs">
					publicación
				</Text>
			</HStack>
			<FilterModalComponent open={open} onClose={onClose} onFilter={onFilter} onClean={handleOnClean} />
		</Stack>
	);
};
export default FilterOptionsComponent;
