import { ProjectLeader, ProjectOrganization, ProjectPosition } from "@/types/project";
import { HStack, Stack } from "@chakra-ui/react";
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
		<Stack flexDirection={{ base: "column", md: "row" }} w="100%" gap="64px">
			<ProfileCardComponent title="Responsable">
				<ResponsableComponent projectOrganization={projectOrganization} projectResponsable={projectResponsable} />
			</ProfileCardComponent>
			<ProfileCardComponent title="Equipo">
				<HStack flexDirection="row" alignItems="start" wrap="wrap" w="100%">
					{projectPositions.map((position: ProjectPosition) => (
						<PositionComponent position={position} key={position.id} />
					))}
				</HStack>
			</ProfileCardComponent>
		</Stack>
	);
};
export default ProjectProfilesComponent;
