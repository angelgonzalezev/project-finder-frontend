import { VStack } from "@chakra-ui/react";
import ChevronIconComponent from "../ChevronIconComponent";

interface ToggleOptionsComponentProps {
	showOptions: boolean;
	setShowOptions: (e: boolean) => void;
}
const ToggleOptionsComponent = (props: ToggleOptionsComponentProps) => {
	const { showOptions, setShowOptions } = props;

	return (
		<VStack gap={0} cursor="pointer" onClick={() => setShowOptions(!showOptions)} alignSelf="center" justify="center">
			<ChevronIconComponent rotationDeg={180} />
			<ChevronIconComponent />
		</VStack>
	);
};
export default ToggleOptionsComponent;
