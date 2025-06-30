import { HStack, Text } from "@chakra-ui/react";
import HeaderOptionsComponent from "./HeaderOptionsComponent";
import MenuMobileComponent from "./MenuMobileComponent";

const HeaderComponent = () => {
	return (
		<HStack
			alignItems="center"
			justifyContent="space-between"
			w="100%"
			py="20px"
			pr={{ base: "24px", md: "40px" }}
			pl={{ base: "12px", md: "40px" }}
			borderBottomWidth="1px"
			borderBottomColor="allGrey4"
			position="fixed"
			top={0}
			bgColor="white"
			zIndex={100}
		>
			<Text textStyle="regularLg" color="PrimitivesBlack" display={{ base: "none", md: "block" }}>
				Buscar Proyectos
			</Text>
			<MenuMobileComponent />
			<HeaderOptionsComponent />
		</HStack>
	);
};
export default HeaderComponent;
