import { Colors } from "@/constants/colors";
import { ProjectPosition } from "@/types/project";
import { formatSkillList } from "@/utils/utils";
import { Button, Stack, Text } from "@chakra-ui/react";

interface PositionComponentProps {
	position: ProjectPosition;
}
const PositionComponent = (props: PositionComponentProps) => {
	const { position } = props;
	return (
		<Stack
			flexDirection="column"
			borderWidth="1px"
			borderColor={Colors.AllGrey4}
			borderRadius="12px"
			p="24px"
			w="fit-content"
			gap="16px"
			maxW="600px"
			minW="208px"
		>
			<Stack>
				<Text fontSize="20px" lineHeight="140%" color={Colors.Grey9}>
					{position.title}
				</Text>
				<Text fontSize="14px" lineHeight="20px" color={Colors.TextGrey8}>
					{formatSkillList(position.skills)}
				</Text>
			</Stack>
			<Button bgColor={Colors.AllYellow6} color={Colors.Grey9} borderRadius="md">
				Aplicar
			</Button>
		</Stack>
	);
};
export default PositionComponent;
