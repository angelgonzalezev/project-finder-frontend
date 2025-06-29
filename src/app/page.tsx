import mockProjects from "@/mockData/mockProjects";
import { Project } from "@/types/project";
import "./globals.css";
import ProjectDetailsComponent from "@/components/PositionDetailsComponent";
import { Stack } from "@chakra-ui/react";
import FilterOptionsComponent from "@/components/FilterOptionsComponent";

export default function Home() {
	const allProjects = mockProjects;
	const filteredProjects = allProjects;

	return (
		<Stack flex={1} px="40px" gap="40px">
			<FilterOptionsComponent />
			{filteredProjects.map((project: Project) => (
				<ProjectDetailsComponent project={project} key={project.id} />
			))}
		</Stack>
	);
}
