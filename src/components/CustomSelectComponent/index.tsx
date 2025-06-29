import { HStack, Text, VStack } from "@chakra-ui/react";
import { Colors } from "@/constants/colors";
import { useState } from "react";
import { FilterOption } from "@/types/filters";
import SelectedOptionComponent from "./SelectedOptionComponent";
import InputOptionComponent from "./InputOptionComponent";
import ToggleOptionsComponent from "./ToggleOptionsComponent";
import OptionsListComponent from "./OptionsListComponent";
import { CustomSelectComponentType } from "./types";

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
				borderColor={Colors.AllGrey4}
				borderRadius="sm"
				px="2px"
				py="6px"
				w="100%"
			>
				{selectType === CustomSelectComponentType.MultiSelect && (
					<>
						{selectedOptions.length > 0 && (
							<HStack>
								{selectedOptions.map((option: FilterOption) => (
									<SelectedOptionComponent option={option} onUnSelect={onUnSelect} key={option.id} />
								))}
							</HStack>
						)}
						<InputOptionComponent input={input} setInput={setInput} setShowOptions={setShowOptions} />
					</>
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
