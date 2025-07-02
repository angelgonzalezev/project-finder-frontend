import IconComponent from "@/components/IconComponent";
import { Center, Text } from "@chakra-ui/react";
import CheckIcon from "@/assets/icons/CheckIcon.svg";

const AppliedTagComponent = () => {
	return (
		<Center gap="6px" w="fit-content" bgColor="allYellow2" px="8px" py="6px" borderRadius="6px">
			<IconComponent icon={CheckIcon} />
			<Text textStyle="regularXs" color="allGrey9">
				Aplicado
			</Text>
		</Center>
	);
};
export default AppliedTagComponent;
