import SearchBarComponent from "./components/SearchBarComponent";
import ProjectBannerComponent from "./components/ProjectBannerComponent";
import ProjectInfoComponent from "./components/ProjectInfoComponent";
import { Stack } from "@chakra-ui/react";
import ProjectProfilesComponent from "./components/ProjectProfilesComponent";
import { notFound } from "next/navigation";
import { getProjectDetails } from "@/services/projectsService";

interface ProjectDetailsProps {
	params: Promise<{ projectId: string }>;
}

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
	const { projectId } = await params;

	const { success, data } = await getProjectDetails(projectId);

	if (!success || !data) return notFound();

	const {
		title,
		description,
		goals,
		faqs,
		organization,
		projectLeader,
		positions,
		category,
		subcategory,
		startDate,
		totalHours,
		budget,
	} = data;

	const estimatedBudget = budget.hourTo ? budget.hourTo * totalHours : budget.total;

	return (
		<Stack gap="40px">
			<SearchBarComponent title={title} />
			<ProjectBannerComponent
				title={title}
				category={category.name}
				subCategory={subcategory?.name}
				startDate={new Date(startDate).toLocaleDateString()}
				totalHours={totalHours}
				estimatedBudget={estimatedBudget}
				positions={positions.length}
			/>
			<ProjectInfoComponent projectDescription={description} projectGoals={goals} projectFaqs={faqs} />
			<ProjectProfilesComponent
				projectOrganization={organization}
				projectResponsable={projectLeader}
				projectPositions={positions}
			/>
		</Stack>
	);
};
export default ProjectDetails;
