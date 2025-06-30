import { FilterType } from "@/types/filters";
import { Stack } from "@chakra-ui/react";
import { FilterNames } from "../FilterModalComponent/types";
import FilterGroupRowComponent from "./FilterGroupRowComponent";
import AccordionItemComponent from "../AccordionComponent/AccordionItemComponent";
import AccordionRootComponent from "../AccordionComponent/AccordionRootComponent";

interface SelectedFiltersComponentProps {
	filters: FilterType[];
}

const SelectedFiltersComponent = (props: SelectedFiltersComponentProps) => {
	const { filters } = props;
	const specialtyFilters = filters.filter((item: FilterType) => item.name === FilterNames.Specialties)[0];
	const specialtyOperator = specialtyFilters?.operator[0];

	const skillFilters = filters.filter((item: FilterType) => item.name === FilterNames.Skills)[0];
	const skillOperator = skillFilters?.operator[0];

	const categoryFilters = filters.filter((item: FilterType) => item.name === FilterNames.Categories)[0];
	const categoryOperator = categoryFilters?.operator[0];

	const industryFilters = filters.filter((item: FilterType) => item.name === FilterNames.Industries)[0];
	const industryOperator = industryFilters?.operator[0];

	return (
		<AccordionRootComponent collapsible={true}>
			<AccordionItemComponent title="Filtros aplicados">
				<Stack mt="16px">
					{specialtyFilters && (
						<FilterGroupRowComponent
							groupFilters={specialtyFilters}
							operator={specialtyOperator}
							title="Especialidades"
						/>
					)}
					{skillFilters && (
						<FilterGroupRowComponent groupFilters={skillFilters} operator={skillOperator} title="Habilidades" />
					)}
					{categoryFilters && (
						<FilterGroupRowComponent
							groupFilters={categoryFilters}
							operator={categoryOperator}
							title="Tipo de proyectos"
						/>
					)}
					{industryFilters && (
						<FilterGroupRowComponent groupFilters={industryFilters} operator={industryOperator} title="Industrias" />
					)}
				</Stack>
			</AccordionItemComponent>
		</AccordionRootComponent>
	);
};
export default SelectedFiltersComponent;
