import { HStack, Text } from "@chakra-ui/react";
import HeaderOptionsComponent from "./ui/HeaderOptionsComponent";
import { Colors } from "@/constants/colors";

const HeaderComponent = () => {
	return (
		<HStack
			alignItems="center"
			justifyContent="space-between"
			maxW="1440px"
			py="20px"
			px={8}
			borderBottomWidth="1px"
			borderBottomColor={Colors.Grey4}
		>
			<Text>Buscar Proyectos</Text>
			<HeaderOptionsComponent />
		</HStack>
	);
};
export default HeaderComponent;
