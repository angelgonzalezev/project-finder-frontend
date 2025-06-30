import { HStack, Stack, Text } from "@chakra-ui/react";
import CustomSelectComponent from "../CustomSelectComponent";
import { CustomSelectComponentType } from "../CustomSelectComponent/types";
import { FilterOption } from "@/types/filters";
import { filterTypeOptions } from "./types";

interface InputFilterComponentProps {
	title: string;
	options: FilterOption[];
	selectedOptions: FilterOption[];
	setSelectedOptions: (e: FilterOption[]) => void;
	selectedTypeOption: FilterOption[];
	setSelectedTypeOption: (e: FilterOption[]) => void;
}
const InputFilterComponent = (props: InputFilterComponentProps) => {
	const { title, options, selectedOptions, setSelectedOptions, selectedTypeOption, setSelectedTypeOption } = props;
	const filterOptions = filterTypeOptions;
	return (
		<Stack gap="6px">
			<Text textStyle="regularMd">{title}</Text>
			<HStack flex={1} justify="space-between">
				<CustomSelectComponent
					handleSelect={setSelectedOptions}
					handleUnSelect={setSelectedOptions}
					optionList={options}
					selectedOptions={selectedOptions}
					selectType={CustomSelectComponentType.MultiSelect}
				/>
				<CustomSelectComponent
					handleSelect={setSelectedTypeOption}
					handleUnSelect={() => null}
					optionList={filterOptions}
					selectedOptions={selectedTypeOption}
					selectType={CustomSelectComponentType.SingleSelect}
					maxWidth="55px"
				/>
			</HStack>
		</Stack>
	);
};
export default InputFilterComponent;
