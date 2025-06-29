import { Colors } from "@/constants/colors";
import { FilterType } from "@/types/filters";
import { Accordion, Span, Stack } from "@chakra-ui/react";
import { FilterNames } from "../FilterModalComponent/types";
import FilterGroupRowComponent from "./FilterGroupRowComponent";

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
		<Accordion.Root multiple collapsible>
			<Accordion.Item value={"a"} px="16px" py="12px" bgColor={Colors.SurfaceGreen2} borderRadius="sm">
				<Accordion.ItemTrigger bgColor={Colors.SurfaceGreen2}>
					<Span flex="1" fontStyle="italic">
						Filtros aplicados
					</Span>
					<Accordion.ItemIndicator />
				</Accordion.ItemTrigger>
				<Accordion.ItemContent mt="16px">
					<Accordion.ItemBody>
						<Stack>
							{specialtyFilters && (
								<FilterGroupRowComponent groupFilters={specialtyFilters} operator={specialtyOperator} />
							)}
							{skillFilters && <FilterGroupRowComponent groupFilters={skillFilters} operator={skillOperator} />}
							{categoryFilters && (
								<FilterGroupRowComponent groupFilters={categoryFilters} operator={categoryOperator} />
							)}

							{industryFilters && (
								<FilterGroupRowComponent groupFilters={industryFilters} operator={industryOperator} />
							)}
						</Stack>
					</Accordion.ItemBody>
				</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion.Root>
	);
};
export default SelectedFiltersComponent;
