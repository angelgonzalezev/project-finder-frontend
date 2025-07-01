"use client";

import { Project } from "@/types/project";
import "./globals.css";
import ProjectDetailsComponent from "@/components/PositionDetailsComponent";
import FilterOptionsComponent from "@/components/FilterOptionsComponent";
import { Fragment, useEffect, useState } from "react";
import { FilterData, FilterOption } from "@/types/filters";
import SelectedFiltersComponent from "@/components/SelectedFiltersComponent";
import { getProjects } from "@/services/projectsService";
import { FilterNames } from "@/components/FilterModalComponent/types";
import { updateFilters } from "./utils/updateFilters";

const initFilters = {
	filters: [],
	order: null,
};
export default function Home() {
	const [filters, setFilters] = useState<FilterData>(initFilters);
	const [projects, setProjects] = useState<Project[] | null>(null);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			setLoading(true);
			try {
				const { success, data } = await getProjects(filters);

				if (success && data) {
					setProjects(data);
				}
				setError(!success);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, [filters]);

	const handleOnClean = () => {
		setFilters(initFilters);
	};

	const handleOnRemoveFilter = (filter: FilterOption, filterGroup: FilterNames) => {
		const currentFilter = { ...filters };

		const updatedFilters = updateFilters(filter, filters, filterGroup);

		currentFilter.filters = updatedFilters;
		setFilters({ ...currentFilter, filters: updatedFilters });
	};

	return (
		<Fragment>
			<FilterOptionsComponent onFilter={setFilters} onClean={handleOnClean} selectedFilters={filters.filters} />
			{filters && filters.filters && filters.filters.length > 0 && (
				<SelectedFiltersComponent filters={filters.filters} onRemove={handleOnRemoveFilter} />
			)}

			{loading && <></>}

			{error && <p>Error cargando proyectos. Inténtelo de nuevo.</p>}

			{projects?.map((project: Project) => (
				<ProjectDetailsComponent project={project} key={project.id} />
			))}
		</Fragment>
	);
}
