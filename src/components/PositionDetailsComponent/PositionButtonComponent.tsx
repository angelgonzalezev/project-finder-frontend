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
			borderLeftColor="allGrey4"
			cursor="pointer"
			display={{ base: "none", md: "flex" }}
		>
			<NextImage src={ButtonIcon} alt="button icon" width={24} height={24} />
		</Stack>
	);
};
export default PositionButtonComponent;
