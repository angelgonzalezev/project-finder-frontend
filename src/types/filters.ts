import { FilterNames } from "@/components/FilterModalComponent/types";

export interface FilterOption {
	id: number;
	name: string;
}

export interface FilterType {
	selectedFilters: FilterOption[];
	operator: FilterOption[];
	name?: FilterNames;
}

export interface FilterData {
	filters: FilterType[];
	order: OrderEnum | null;
}

export enum OrderEnum {
	ASC = "ASC",
	DESC = "DESC",
}
