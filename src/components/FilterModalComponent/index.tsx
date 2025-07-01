import CustomModalComponent from "../CustomModalComponent";
import { useEffect, useState } from "react";
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
	onClean: () => void;
	selectedSpecialtyFilters?: FilterType;
	selectedSkillFilters?: FilterType;
	selectedCategoryFilters?: FilterType;
	selectedIndustryFilters?: FilterType;
}
const FilterModalComponent = (props: FilterModalComponent) => {
	const {
		open,
		onClose,
		onFilter,
		onClean,
		selectedSpecialtyFilters,
		selectedSkillFilters,
		selectedCategoryFilters,
		selectedIndustryFilters,
	} = props;

	const [specialtyFilter, setSpecialtyFilter] = useState<FilterType>(filterInit);
	const [skillFilter, setSkillFilter] = useState<FilterType>(filterInit);
	const [categoryFilter, setCategoryFilter] = useState<FilterType>(filterInit);
	const [industryFilter, setIndustryFilter] = useState<FilterType>(filterInit);
	const [order, setOrder] = useState<string | null>(null);

	useEffect(() => {
		setSpecialtyFilter(selectedSpecialtyFilters ?? { ...filterInit, name: FilterNames.Specialties });
	}, [selectedSpecialtyFilters]);

	useEffect(() => {
		setSkillFilter(selectedSkillFilters ?? { ...filterInit, name: FilterNames.Skills });
	}, [selectedSkillFilters]);

	useEffect(() => {
		setCategoryFilter(selectedCategoryFilters ?? { ...filterInit, name: FilterNames.Categories });
	}, [selectedCategoryFilters]);

	useEffect(() => {
		setIndustryFilter(selectedIndustryFilters ?? { ...filterInit, name: FilterNames.Industries });
	}, [selectedIndustryFilters]);

	const specialtyOptions = mockSpecialties as FilterOption[];
	const skillOptions = mockSkills as FilterOption[];
	const categoryOptions = mockCategories as FilterOption[];
	const industryOptions = mockIndustries as FilterOption[];

	const initializeFilters = () => {
		setSpecialtyFilter({ ...filterInit, name: FilterNames.Specialties });
		setSkillFilter({ ...filterInit, name: FilterNames.Skills });
		setCategoryFilter({ ...filterInit, name: FilterNames.Categories });
		setIndustryFilter({ ...filterInit, name: FilterNames.Industries });
		setOrder(null);
	};

	const handleOnClose = () => {
		setOrder(null);
		onClose();
	};

	const handleOnClean = () => {
		initializeFilters();
		onClean();
	};

	const handleOnFilter = () => {
		const filters = [specialtyFilter, skillFilter, categoryFilter, industryFilter].filter(
			(item) => item?.selectedFilters && item.selectedFilters.length > 0
		);
		onFilter({ filters, order });
		onClose();
	};

	return (
		<CustomModalComponent
			isOpen={open}
			onClose={handleOnClose}
			onFilter={handleOnFilter}
			title="Filtrar Proyectos"
			onClean={handleOnClean}
		>
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
