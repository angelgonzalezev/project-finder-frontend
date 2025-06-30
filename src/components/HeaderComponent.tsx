import { HStack, Text } from "@chakra-ui/react";
import HeaderOptionsComponent from "./HeaderOptionsComponent";

const HeaderComponent = () => {
	return (
		<HStack
			alignItems="center"
			justifyContent="space-between"
			w="100%"
			py="20px"
			px={8}
			borderBottomWidth="1px"
			borderBottomColor="allGrey4"
			position="fixed"
			top={0}
			bgColor="white"
			zIndex={100}
		>
			<Text fontSize="18px" lineHeight="26px" color="PrimitivesBlack">
				Buscar Proyectos
			</Text>
			<HeaderOptionsComponent />
		</HStack>
	);
};
export default HeaderComponent;
