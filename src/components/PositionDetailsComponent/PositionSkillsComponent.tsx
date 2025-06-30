import { Skill } from "@/types/skill";
import { HStack } from "@chakra-ui/react";
import TagComponent from "../TagComponent";

interface PositionSkillsComponentProps {
	skills: Skill[];
}
const PositionSkillsComponent = (props: PositionSkillsComponentProps) => {
	const { skills } = props;
	return (
		<HStack wrap="wrap">
			{skills.map((skill: Skill) => (
				<TagComponent key={skill.id} label={skill.name} bgColor="allGrey2" />
			))}
		</HStack>
	);
};
export default PositionSkillsComponent;
