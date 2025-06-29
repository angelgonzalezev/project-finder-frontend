"use client";

import mockProjects from "@/mockData/mockProjects";
import { Project } from "@/types/project";
import "./globals.css";
import ProjectDetailsComponent from "@/components/PositionDetailsComponent";
import { Stack } from "@chakra-ui/react";
import FilterOptionsComponent from "@/components/FilterOptionsComponent";
import { useState } from "react";
import { FilterData } from "@/types/filters";
import SelectedFiltersComponent from "@/components/SelectedFiltersComponent";

export default function Home() {
	const [filters, setFilters] = useState<FilterData | null>(null);
	const allProjects = mockProjects;
	const filteredProjects = allProjects;

	return (
		<Stack flex={1} px="40px" gap="40px" mt="140px">
			{filters && filters.filters.length > 0 && <SelectedFiltersComponent filters={filters.filters} />}
			<FilterOptionsComponent onFilter={setFilters} />
			{filteredProjects.map((project: Project) => (
				<ProjectDetailsComponent project={project} key={project.id} />
			))}
		</Stack>
	);
}
