import { FilterNames } from "@/components/FilterModalComponent/types";
import { FilterData, FilterOption, FilterType } from "@/types/filters";

export const updateFilters = (filter: FilterOption, filters: FilterData, filterGroup: FilterNames) => {
	return filters.filters?.reduce((acc: FilterType[], group: FilterType) => {
		if (group.name === filterGroup) {
			const updatedSelectedFilters = group.selectedFilters.filter((f) => f.id !== filter.id);

			if (updatedSelectedFilters.length > 0) {
				acc.push({
					...group,
					selectedFilters: updatedSelectedFilters,
				});
			}
		} else {
			acc.push(group);
		}

		return acc;
	}, []);
};
