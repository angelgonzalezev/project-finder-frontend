import { Stack } from "@chakra-ui/react";
import ProjectInformationComponent from "./PositionInfoComponent";
import { Project } from "@/types/project";
import ReferralBonusComponent from "./ReferralBonusComponent";

interface Props {
	project: Project;
}
const ProjectDetailsComponent = (props: Props) => {
	return (
		<Stack gap="8px" className="slide-in-bounce">
			<ReferralBonusComponent referralBonus={300} />
			<ProjectInformationComponent project={props.project} />
		</Stack>
	);
};
export default ProjectDetailsComponent;
