import { Colors } from "@/constants/colors";
import { ProjectBudget } from "@/types/project";
import { Skill } from "@/types/skill";
import { Stack, HStack, Span, Text } from "@chakra-ui/react";
import PositionSkillsComponent from "./PositionSkillsComponent";
import { formatWithCommas } from "@/utils/currency";

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
		<Stack gap="12px">
			<Text fontSize="18px" lineHeight="26px">
				{projectTitle}
			</Text>
			<HStack>
				<Text fontWeight="medium" fontSize="14px" lineHeight="20px" color={Colors.TextGreen6}>
					<Span>{categoryName}</Span>
					<Span mx="1"> | </Span>
					{subcategoryName ? <Span>{subcategoryName}</Span> : null}
					<Span mx="1"> | </Span>
					<>
						<Span mr="1" color={Colors.Green4}>
							€
						</Span>
						{projectBudget.total ? (
							<Span>{formatWithCommas(projectBudget.total)}€</Span>
						) : (
							<Span>
								{projectBudget.hourFrom} - {projectBudget.hourTo} €/h
							</Span>
						)}
					</>
				</Text>
			</HStack>
			<PositionSkillsComponent skills={skills} />
		</Stack>
	);
};
export default PositionInfoDetailsComponent;
