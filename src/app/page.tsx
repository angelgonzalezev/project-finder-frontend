"use client";

import mockProjects from "@/mockData/mockProjects";
import { Project } from "@/types/project";
import "./globals.css";
import ProjectDetailsComponent from "@/components/PositionDetailsComponent";
import FilterOptionsComponent from "@/components/FilterOptionsComponent";
import { Fragment, useState } from "react";
import { FilterData } from "@/types/filters";
import SelectedFiltersComponent from "@/components/SelectedFiltersComponent";

export default function Home() {
	const [filters, setFilters] = useState<FilterData | null>(null);
	const allProjects = mockProjects;
	const filteredProjects = allProjects;

	return (
		<Fragment>
			{filters && filters.filters.length > 0 && <SelectedFiltersComponent filters={filters.filters} />}
			<FilterOptionsComponent onFilter={setFilters} />
			{filteredProjects.map((project: Project) => (
				<ProjectDetailsComponent project={project} key={project.id} />
			))}
		</Fragment>
	);
}
