import { Colors } from "@/constants/colors";
import { Stack } from "@chakra-ui/react";
import NextImage from "next/image";
import ButtonIcon from "@/assets/icons/ButtonIcon.svg";

const PositionButtonComponent = () => {
	return (
		<Stack
			w="48px"
			alignItems="center"
			justifyContent="center"
			borderLeftWidth="1px"
			borderLeftColor={Colors.Grey4}
			cursor="pointer"
		>
			<NextImage src={ButtonIcon} alt="button icon" width={24} height={24} />
		</Stack>
	);
};
export default PositionButtonComponent;
