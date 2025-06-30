import { ProjectLeader, ProjectOrganization, ProjectPosition } from "@/types/project";
import { HStack } from "@chakra-ui/react";
import PositionComponent from "./PositionComponent";
import ProfileCardComponent from "./ProfileCardComponent";
import ResponsableComponent from "./ResponsableComponent";

interface ProjectProfilesComponentProps {
	projectPositions: ProjectPosition[];
	projectOrganization: ProjectOrganization;
	projectResponsable: ProjectLeader;
}
const ProjectProfilesComponent = (props: ProjectProfilesComponentProps) => {
	const { projectPositions, projectOrganization, projectResponsable } = props;
	return (
		<HStack alignItems="start">
			<ProfileCardComponent title="Responsable">
				<ResponsableComponent projectOrganization={projectOrganization} projectResponsable={projectResponsable} />
			</ProfileCardComponent>
			<ProfileCardComponent title="Equipo">
				<HStack>
					{projectPositions.map((position: ProjectPosition) => (
						<PositionComponent position={position} key={position.id} />
					))}
				</HStack>
			</ProfileCardComponent>
		</HStack>
	);
};
export default ProjectProfilesComponent;
