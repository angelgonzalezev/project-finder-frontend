import { Center, VStack } from "@chakra-ui/react";
import Image from "next/image";
import ChevronIcon from "@/assets/icons/ChevronIcon.svg";

interface ToggleOptionsComponentProps {
	showOptions: boolean;
	setShowOptions: (e: boolean) => void;
}
const ToggleOptionsComponent = (props: ToggleOptionsComponentProps) => {
	const { showOptions, setShowOptions } = props;

	return (
		<VStack gap={0} cursor="pointer" onClick={() => setShowOptions(!showOptions)} alignSelf="end" justify="center">
			<Center p={0} m={0} transform="rotate(180deg)">
				<Image src={ChevronIcon} alt="chevron icon" />
			</Center>
			<Center>
				<Image src={ChevronIcon} alt="chevron icon" />
			</Center>
		</VStack>
	);
};
export default ToggleOptionsComponent;
