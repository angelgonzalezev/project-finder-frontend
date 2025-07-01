import { ProjectBudget } from "@/types/project";
import { formatWithCommas } from "@/utils/currency";
import { Span } from "@chakra-ui/react";
import { Fragment } from "react";

interface BudgetComponentProps {
	projectBudget: ProjectBudget;
}
const BudgetComponent = ({ projectBudget }: BudgetComponentProps) => {
	return (
		<Fragment>
			<Span mr="1" color="allGreen4">
				€
			</Span>
			{projectBudget.total ? (
				<Span>{formatWithCommas(projectBudget.total)}€</Span>
			) : (
				<Span>
					{projectBudget.hourFrom} - {projectBudget.hourTo} €/h
				</Span>
			)}
		</Fragment>
	);
};
export default BudgetComponent;
