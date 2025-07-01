import { Stack } from "@chakra-ui/react";
import ProjectInformationComponent from "./PositionInfoComponent";
import { Project } from "@/types/project";
import ReferralBonusComponent from "./ReferralBonusComponent";

interface Props {
	project: Project;
}
const ProjectDetailsComponent = (props: Props) => {
	const { project } = props;

	const referralBonus = project.positions[0].referralBonus;
	return (
		<Stack gap="8px" className="slide-in-bounce">
			{referralBonus && <ReferralBonusComponent referralBonus={referralBonus} />}
			<ProjectInformationComponent project={props.project} />
		</Stack>
	);
};
export default ProjectDetailsComponent;
