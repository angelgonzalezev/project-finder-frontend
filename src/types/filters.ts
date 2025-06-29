export interface FilterOption {
	id: number;
	name: string;
}

export interface FilterType {
	selectedFilters: FilterOption[];
	operator: FilterOption[];
	name: string;
}

export interface FilterData {
	filters: FilterType[];
	order: string | null;
}
