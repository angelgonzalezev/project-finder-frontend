import { Colors } from "@/constants/colors";
import { Skill } from "@/types/skill";
import { Center, HStack } from "@chakra-ui/react";

interface PositionSkillsComponentProps {
	skills: Skill[];
}
const PositionSkillsComponent = (props: PositionSkillsComponentProps) => {
	const { skills } = props;
	return (
		<HStack>
			{skills.map((skill: Skill) => (
				<Center
					key={skill.id}
					px="8px"
					py="6px"
					borderRadius="6px"
					bgColor={Colors.Grey2}
					color={Colors.Grey9}
					fontSize="12px"
					lineHeight="16px"
					letterSpacing="0px"
				>
					{skill.name}
				</Center>
			))}
		</HStack>
	);
};
export default PositionSkillsComponent;
