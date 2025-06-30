"use client";

import { Project } from "@/types/project";
import "./globals.css";
import ProjectDetailsComponent from "@/components/PositionDetailsComponent";
import FilterOptionsComponent from "@/components/FilterOptionsComponent";
import { Fragment, useEffect, useState } from "react";
import { FilterData } from "@/types/filters";
import SelectedFiltersComponent from "@/components/SelectedFiltersComponent";
import { getProjects } from "@/services/projectsService";

export default function Home() {
	const [filters, setFilters] = useState<FilterData | null>(null);
	const [projects, setProjects] = useState<Project[] | null>(null);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projects = await getProjects();
				setProjects(projects);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);

	return (
		<Fragment>
			<FilterOptionsComponent onFilter={setFilters} />
			{filters && filters.filters.length > 0 && <SelectedFiltersComponent filters={filters.filters} />}

			{loading ? (
				<p>Cargando proyectos...</p>
			) : error ? (
				<p>Error cargando proyectos. Inténtelo de nuevo.</p>
			) : (
				projects?.map((project: Project) => <ProjectDetailsComponent project={project} key={project.id} />)
			)}
		</Fragment>
	);
}
