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
			borderColor="allGrey4"
			borderRadius="12px"
			p="24px"
			w="fit-content"
			gap="16px"
			maxW="600px"
			minW="208px"
		>
			<Stack>
				<Text fontSize="20px" lineHeight="140%" color="allGrey9">
					{position.title}
				</Text>
				<Text fontSize="14px" lineHeight="20px" color="textGrey8">
					{formatSkillList(position.skills)}
				</Text>
			</Stack>
			<Button bgColor="allYellow6" color="allGrey9" borderRadius="md">
				Aplicar
			</Button>
		</Stack>
	);
};
export default PositionComponent;
