import { Accordion, Span } from "@chakra-ui/react";

interface AccordionItemComponentProps {
	title: string;
	children: React.ReactNode;
	index?: number;
	isFaq?: boolean;
	selectedValue?: string;
}
const AccordionItemComponent = (props: AccordionItemComponentProps) => {
	const { title, children, index = 0, isFaq = false, selectedValue } = props;

	const isOpened = !isFaq || Number(selectedValue) === index;

	const getAccordionStyles = () =>
		isOpened ? { borderWidth: "0px", bgColor: "surfaceGreen2" } : { borderWidth: "2px", borderColor: "allGreen2" };

	return (
		<Accordion.Item
			key={index}
			value={`${index}`}
			px="16px"
			py="12px"
			borderRadius="md"
			mt={index !== 0 ? "12px" : 0}
			{...getAccordionStyles()}
		>
			<Accordion.ItemTrigger cursor="pointer" bgColor={isOpened ? "surfaceGreen2" : "white"}>
				<Span flex="1" textStyle={isFaq ? "fixedRegularXs" : "regularMd"} fontStyle="italic">
					{title}
				</Span>
				<Accordion.ItemIndicator />
			</Accordion.ItemTrigger>
			<Accordion.ItemContent>
				<Accordion.ItemBody>{children}</Accordion.ItemBody>
			</Accordion.ItemContent>
		</Accordion.Item>
	);
};
export default AccordionItemComponent;
