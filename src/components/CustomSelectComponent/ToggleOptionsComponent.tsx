import { VStack } from "@chakra-ui/react";
import IconComponent from "../IconComponent";
import ChevronIcon from "@/assets/icons/ChevronIcon.svg";

interface ToggleOptionsComponentProps {
	showOptions: boolean;
	setShowOptions: (e: boolean) => void;
}
const ToggleOptionsComponent = (props: ToggleOptionsComponentProps) => {
	const { showOptions, setShowOptions } = props;

	return (
		<VStack gap={0} cursor="pointer" onClick={() => setShowOptions(!showOptions)} alignSelf="center" justify="center">
			<IconComponent rotationDeg={180} icon={ChevronIcon} />
			<IconComponent icon={ChevronIcon} />
		</VStack>
	);
};
export default ToggleOptionsComponent;
