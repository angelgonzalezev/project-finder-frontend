import mockProjects from "@/mockData/mockProjects";
import { Project } from "@/types/project";
import "./globals.css";
import ProjectDetailsComponent from "@/components/PositionDetailsComponent";
import { Stack } from "@chakra-ui/react";

export default function Home() {
	return (
		<Stack flex={1} px="40px" gap="40px">
			{mockProjects.map((project: Project) => (
				<ProjectDetailsComponent project={project} key={project.id} />
			))}
		</Stack>
	);
}
