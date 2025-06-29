import { Input } from "@chakra-ui/react";

interface InputOptionComponentProps {
	input: string;
	setInput: (e: string) => void;
	setShowOptions: (e: boolean) => void;
}
const InputOptionComponent = (props: InputOptionComponentProps) => {
	const { input, setInput, setShowOptions } = props;

	return (
		<Input
			value={input}
			onChange={(e) => {
				setInput(e.target.value);
				setShowOptions(true);
			}}
			placeholder="Busca y añade"
			bg="white"
			border="none"
			_focusVisible={{ outline: "none" }}
			h="24px"
			flex={1}
		/>
	);
};
export default InputOptionComponent;
