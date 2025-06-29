import CustomModalComponent from "../CustomModalComponent";
import { useState } from "react";
import mockSpecialties from "@/mockData/mockSpecialties";
import { FilterOption, FilterType } from "@/types/filters";
import InputFilterComponent from "./InputFilterComponent";
import mockSkills from "@/mockData/mockSkills";
import { FilterNames, FilterOperatorTypes } from "./types";
import mockCategories from "@/mockData/mockCategories";
import mockIndustries from "@/mockData/mockIndustries";
import OrderSelectorComponent from "./OrderSelectorComponent";

const filterInit = {
	selectedFilters: [],
	operator: [FilterOperatorTypes.O],
};

interface FilterModalComponent {
	open: boolean;
	onClose: () => void;
	onFilter: (e: { filters: FilterType[]; order: string | null }) => void;
}
const FilterModalComponent = (props: FilterModalComponent) => {
	const { open, onClose, onFilter } = props;
	const [specialtyFilter, setSpecialtyFilter] = useState<FilterType>({ ...filterInit, name: FilterNames.Specialties });
	const [skillFilter, setSkillFilter] = useState<FilterType>({ ...filterInit, name: FilterNames.Skills });
	const [categoryFilter, setCategoryFilter] = useState<FilterType>({ ...filterInit, name: FilterNames.Categories });
	const [industryFilter, setIndustryFilter] = useState<FilterType>({ ...filterInit, name: FilterNames.Industries });
	const [order, setOrder] = useState<string | null>(null);

	const specialtyOptions = mockSpecialties as FilterOption[];
	const skillOptions = mockSkills as FilterOption[];
	const categoryOptions = mockCategories as FilterOption[];
	const industryOptions = mockIndustries as FilterOption[];

	const handleOnClose = () => {
		setSpecialtyFilter({ ...filterInit, name: FilterNames.Specialties });
		setSkillFilter({ ...filterInit, name: FilterNames.Skills });
		setCategoryFilter({ ...filterInit, name: FilterNames.Categories });
		setIndustryFilter({ ...filterInit, name: FilterNames.Industries });
		setOrder(null);
		onClose();
	};

	const handleOnFilter = () => {
		const filters = [specialtyFilter, skillFilter, categoryFilter, industryFilter].filter(
			(item) => item.selectedFilters && item.selectedFilters.length > 0
		);
		onFilter({ filters, order });
		onClose();
	};

	return (
		<CustomModalComponent isOpen={open} onClose={handleOnClose} onFilter={handleOnFilter} title="Filtrar Proyectos">
			<InputFilterComponent
				title="Especialidades"
				options={specialtyOptions}
				selectedOptions={specialtyFilter.selectedFilters}
				setSelectedOptions={(e) => setSpecialtyFilter({ ...specialtyFilter, selectedFilters: e })}
				selectedTypeOption={specialtyFilter.operator}
				setSelectedTypeOption={(e) => setSpecialtyFilter({ ...specialtyFilter, operator: e })}
			/>
			<InputFilterComponent
				title="Habilidades"
				options={skillOptions}
				selectedOptions={skillFilter.selectedFilters}
				setSelectedOptions={(e) => setSkillFilter({ ...skillFilter, selectedFilters: e })}
				selectedTypeOption={skillFilter.operator}
				setSelectedTypeOption={(e) => setSkillFilter({ ...skillFilter, operator: e })}
			/>
			<InputFilterComponent
				title="Tipo de proyecto"
				options={categoryOptions}
				selectedOptions={categoryFilter.selectedFilters}
				setSelectedOptions={(e) => setCategoryFilter({ ...categoryFilter, selectedFilters: e })}
				selectedTypeOption={categoryFilter.operator}
				setSelectedTypeOption={(e) => setCategoryFilter({ ...categoryFilter, operator: e })}
			/>
			<InputFilterComponent
				title="Industria"
				options={industryOptions}
				selectedOptions={industryFilter.selectedFilters}
				setSelectedOptions={(e) => setIndustryFilter({ ...industryFilter, selectedFilters: e })}
				selectedTypeOption={industryFilter.operator}
				setSelectedTypeOption={(e) => setIndustryFilter({ ...industryFilter, operator: e })}
			/>
			<OrderSelectorComponent value={order} setValue={setOrder} />
		</CustomModalComponent>
	);
};
export default FilterModalComponent;
