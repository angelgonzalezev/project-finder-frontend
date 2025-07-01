import { HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FilterOption } from "@/types/filters";
import ToggleOptionsComponent from "./ToggleOptionsComponent";
import OptionsListComponent from "./OptionsListComponent";
import { CustomSelectComponentType } from "./types";
import InputComponent from "./InputComponent";

interface CustomSelectComponentProps {
	selectedOptions: FilterOption[];
	handleUnSelect: (option: FilterOption[]) => void;
	handleSelect: (option: FilterOption[]) => void;
	optionList: FilterOption[];
	selectType: CustomSelectComponentType;
	maxWidth?: string;
}

const CustomSelectComponent = (props: CustomSelectComponentProps) => {
	const { selectedOptions, handleUnSelect, handleSelect, optionList, selectType, maxWidth } = props;
	const [input, setInput] = useState<string>("");
	const [showOptions, setShowOptions] = useState(false);

	const availableOptions = optionList.filter((option: FilterOption) => !selectedOptions.includes(option));

	const filteredOptions = availableOptions.filter((opt) => opt.name.toLowerCase().includes(input.toLowerCase()));

	const onSelect = (value: FilterOption) => {
		let _currentSelectedOptions: FilterOption[];
		if (selectType === CustomSelectComponentType.MultiSelect) {
			setInput("");
			_currentSelectedOptions = [...selectedOptions];
			_currentSelectedOptions.push(value);
		} else {
			_currentSelectedOptions = [value];
		}
		handleSelect(_currentSelectedOptions);
		setShowOptions(false);
	};

	const onUnSelect = (option: FilterOption) => {
		const _currentSelectedOptions = [...selectedOptions];
		const filteredSelectedOptions = _currentSelectedOptions.filter((item: FilterOption) => item.id !== option.id);
		handleUnSelect(filteredSelectedOptions);
	};

	return (
		<VStack position="relative" flex={1} maxWidth={maxWidth}>
			<HStack
				align="center"
				justify={selectType === CustomSelectComponentType.MultiSelect ? "start" : "center"}
				position="relative"
				borderWidth="1px"
				borderColor="allGrey4"
				borderRadius="sm"
				px="2px"
				py="6px"
				w="100%"
			>
				{selectType === CustomSelectComponentType.MultiSelect && (
					<InputComponent
						selectedOptions={selectedOptions}
						input={input}
						setInput={setInput}
						onUnSelect={onUnSelect}
						setShowOptions={setShowOptions}
					/>
				)}
				{selectType === CustomSelectComponentType.SingleSelect && <Text>{selectedOptions[0].name}</Text>}
				<ToggleOptionsComponent showOptions={showOptions} setShowOptions={setShowOptions} />
			</HStack>

			{showOptions && filteredOptions.length > 0 && (
				<OptionsListComponent filteredOptions={filteredOptions} onSelect={onSelect} />
			)}
		</VStack>
	);
};
export default CustomSelectComponent;
