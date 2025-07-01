import { FilterOption } from "@/types/filters";
import { HStack } from "@chakra-ui/react";
import InputOptionComponent from "./InputOptionComponent";
import SelectedOptionComponent from "./SelectedOptionComponent";

interface InputComponent {
	selectedOptions: FilterOption[];
	input: string;
	setInput: (e: string) => void;
	onUnSelect: (e: FilterOption) => void;
	setShowOptions: (e: boolean) => void;
}
const InputComponent = (props: InputComponent) => {
	const { selectedOptions, input, setInput, onUnSelect, setShowOptions } = props;
	return (
		<HStack w="100%">
			{selectedOptions.length > 0 &&
				selectedOptions.map((option: FilterOption) => (
					<SelectedOptionComponent option={option} onUnSelect={onUnSelect} key={option.id} />
				))}
			<InputOptionComponent input={input} setInput={setInput} setShowOptions={setShowOptions} />
		</HStack>
	);
};
export default InputComponent;
