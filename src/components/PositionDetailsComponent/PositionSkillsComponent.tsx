import { Skill } from "@/types/skill";
import { HStack } from "@chakra-ui/react";
import TagComponent from "../TagComponent";
import { Colors } from "@/constants/colors";

interface PositionSkillsComponentProps {
	skills: Skill[];
}
const PositionSkillsComponent = (props: PositionSkillsComponentProps) => {
	const { skills } = props;
	return (
		<HStack>
			{skills.map((skill: Skill) => (
				<TagComponent key={skill.id} label={skill.name} bgColor={Colors.Grey2} />
			))}
		</HStack>
	);
};
export default PositionSkillsComponent;
