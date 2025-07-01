import { ProjectBudget } from "@/types/project";
import { Skill } from "@/types/skill";
import { Stack, HStack, Span, Text } from "@chakra-ui/react";
import PositionSkillsComponent from "./PositionSkillsComponent";
import SeparatorComponent from "./SeparatorComponent";
import BudgetComponent from "./BudgetComponent";

interface PositionInfoDetailsComponentProps {
	projectTitle: string;
	categoryName?: string;
	subcategoryName?: string;
	projectBudget: ProjectBudget;
	skills: Skill[];
}

const PositionInfoDetailsComponent = (props: PositionInfoDetailsComponentProps) => {
	const { projectTitle, categoryName, subcategoryName, projectBudget, skills } = props;

	return (
		<Stack gap={{ base: "6px", md: "12px" }}>
			<Text textStyle="regularLg">{projectTitle}</Text>
			<HStack>
				<Text textStyle="regularSm" color="textGreen6">
					<Span>{categoryName}</Span>
					{subcategoryName && (
						<SeparatorComponent>
							<Span>{subcategoryName}</Span>
						</SeparatorComponent>
					)}
					<>
						<SeparatorComponent>
							<BudgetComponent projectBudget={projectBudget} />
						</SeparatorComponent>
					</>
				</Text>
			</HStack>
			<PositionSkillsComponent skills={skills} />
		</Stack>
	);
};
export default PositionInfoDetailsComponent;
