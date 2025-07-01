import { ProjectPosition } from "@/types/project";
import { formatSkillList } from "@/utils/utils";
import { Button, Stack, Text } from "@chakra-ui/react";

interface PositionComponentProps {
	position: ProjectPosition;
}
const PositionComponent = (props: PositionComponentProps) => {
	const { position } = props;
	const { skills } = position;
	return (
		<Stack
			flexDirection="column"
			borderWidth="1px"
			borderColor="allGrey4"
			borderRadius="12px"
			p="24px"
			w="300px"
			gap="16px"
			maxW="600px"
			minW="208px"
		>
			<Stack>
				<Text textStyle="headingXl" color="allGrey9">
					{position.title}
				</Text>
				<Text textStyle="regularSm" color="textGrey8">
					{formatSkillList(skills)}
				</Text>
			</Stack>
			<Button textStyle="regularSm" bgColor="allYellow6" color="allGrey9" borderRadius="md">
				Aplicar
			</Button>
		</Stack>
	);
};
export default PositionComponent;
