import SearchBarComponent from "./components/SearchBarComponent";
import ProjectBannerComponent from "./components/ProjectBannerComponent";
import mockProjects from "@/mockData/mockProjects";
import ProjectInfoComponent from "./components/ProjectInfoComponent";
import { Box } from "@chakra-ui/react";

const page = () => {
	const mockProject = mockProjects[0];

	const projectDescription = mockProject.description;

	const projectGoals = mockProject.goals;

	const projectFaqs = mockProject.faqs;

	return (
		<Box>
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
		</Box>
	);
};
export default page;
