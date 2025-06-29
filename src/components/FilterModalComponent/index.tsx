import CustomModalComponent from "../CustomModalComponent";
import { useState } from "react";
import mockSpecialties from "@/mockData/mockSpecialties";
import { FilterOption } from "@/types/filters";
import InputFilterComponent from "./InputFilterComponent";
import mockSkills from "@/mockData/mockSkills";
import { FilterOperatorTypes, FilterType } from "./types";
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
}
const FilterModalComponent = (props: FilterModalComponent) => {
	const { open, onClose } = props;
	const [specialtyFilter, setSpecialtyFilter] = useState<FilterType>(filterInit);
	const [skillFilter, setSkillFilter] = useState<FilterType>(filterInit);
	const [categoryFilter, setCategoryFilter] = useState<FilterType>(filterInit);
	const [industryFilter, setIndustryFilter] = useState<FilterType>(filterInit);
	const [order, setOrder] = useState<string | null>(null);

	const specialtyOptions = mockSpecialties as FilterOption[];
	const skillOptions = mockSkills as FilterOption[];
	const categoryOptions = mockCategories as FilterOption[];
	const industryOptions = mockIndustries as FilterOption[];

	const handleOnClose = () => {
		setSpecialtyFilter(filterInit);
		setSkillFilter(filterInit);
		setCategoryFilter(filterInit);
		setIndustryFilter(filterInit);
		setOrder(null);
		onClose();
	};

	return (
		<CustomModalComponent isOpen={open} onClose={handleOnClose} title="Filtrar Proyectos">
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
