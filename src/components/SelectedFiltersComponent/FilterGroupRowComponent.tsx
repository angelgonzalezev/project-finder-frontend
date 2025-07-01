import { FilterType, FilterOption } from "@/types/filters";
import { Center, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import CloseIcon from "@/assets/icons/CloseIcon.svg";
import { Fragment } from "react";
import { FilterNames } from "../FilterModalComponent/types";

interface FilterGroupRowComponentProps {
	groupFilters: FilterType;
	operator: FilterOption;
	title: string;
	onRemove: (e: FilterOption, f: FilterNames) => void;
	filterGroup: FilterNames;
}
const FilterGroupRowComponent = (props: FilterGroupRowComponentProps) => {
	const { groupFilters, operator, title, onRemove, filterGroup } = props;
	return (
		<Stack flexDirection="row" alignItems="center">
			<Text color="textGrey8" textStyle="regularSm">
				{title}:
			</Text>
			<Stack flexDirection="row" alignItems="center">
				{groupFilters.selectedFilters.map((filter: FilterOption, index: number) => (
					<Fragment key={filter.id}>
						<Center
							textStyle="regularXs"
							bgColor="white"
							py="6px"
							px="8px"
							gap="6px"
							borderRadius="8px"
							onClick={() => onRemove(filter, filterGroup)}
							cursor="pointer"
						>
							{filter.name}
							<Image src={CloseIcon} alt="close icon" width={8} height={8} />
						</Center>
						{index < groupFilters.selectedFilters.length - 1 && (
							<Text mx="8px" as="span" textStyle="regularSm">
								{operator?.name}
							</Text>
						)}
					</Fragment>
				))}
			</Stack>
		</Stack>
	);
};
export default FilterGroupRowComponent;
