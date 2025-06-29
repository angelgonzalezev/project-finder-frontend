import { FilterOption } from "@/types/filters";

export const filterTypeOptions: FilterOption[] = [
	{ id: 0, name: "o" },
	{ id: 1, name: "y" },
];

export const FilterOperatorTypes = {
	O: { id: 0, name: "o" },
	Y: { id: 1, name: "y" },
};

export interface FilterType {
	selectedFilters: FilterOption[];
	operator: FilterOption[];
}

export enum RadioItemValues {
	ASC = "ASC",
	DESC = "DESC",
}

export interface RadioItem {
	label: string;
	value: RadioItemValues;
}
