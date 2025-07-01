import SearchBarComponent from "./components/SearchBarComponent";
import ProjectBannerComponent from "./components/ProjectBannerComponent";
import mockProjects from "@/mockData/mockProjects";
import ProjectInfoComponent from "./components/ProjectInfoComponent";
import { Stack } from "@chakra-ui/react";
import ProjectProfilesComponent from "./components/ProjectProfilesComponent";
import { getProjectDetails } from "@/services/projectsService";

interface ProjectDetailsProps {
	params: {
		projectId: string;
	};
}

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
	const { projectId } = params;
	console.log("🚀 ~ ProjectDetails ~ projectId:", projectId);

	const projectDetails = await getProjectDetails(projectId);
	console.log("🚀 ~ ProjectDetails ~ projectDetails:", projectDetails);

	const mockProject = mockProjects[0];

	const projectDescription = mockProject.description;
	const projectGoals = mockProject.goals;
	const projectFaqs = mockProject.faqs;
	const projectOrganization = mockProject.organization;
	const projectResponsable = mockProject.projectLeader;
	const projectPositions = mockProject.positions;

	return (
		<Stack gap="40px">
			<SearchBarComponent />
			<ProjectBannerComponent
				title={"Crea un CRM personalizado para pymes"}
				category={"Diseño"}
				subCategory={"UX/UI Specialist"}
				startDate={"24/07/23"}
				totalHours={234}
				estimatedBudget={2345}
				positions={2}
			/>
			<ProjectInfoComponent
				projectDescription={projectDescription}
				projectGoals={projectGoals}
				projectFaqs={projectFaqs}
			/>
			<ProjectProfilesComponent
				projectOrganization={projectOrganization}
				projectResponsable={projectResponsable}
				projectPositions={projectPositions}
			/>
		</Stack>
	);
};
export default ProjectDetails;
