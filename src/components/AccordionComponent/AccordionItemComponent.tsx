import { Accordion, Span } from "@chakra-ui/react";

interface AccordionItemComponentProps {
	title: string;
	children: React.ReactNode;
	index?: number;
	isFaq?: boolean;
}
const AccordionItemComponent = (props: AccordionItemComponentProps) => {
	const { title, children, index = 0, isFaq = false } = props;
	return (
		<Accordion.Item
			key={index}
			value={`${index}`}
			px="16px"
			py="12px"
			bgColor="surfaceGreen2"
			borderRadius="md"
			borderWidth="0"
			mt={index !== 0 ? "12px" : 0}
		>
			<Accordion.ItemTrigger bgColor="surfaceGreen2" cursor="pointer">
				<Span flex="1" textStyle={isFaq ? "regularXs" : "regularMd"} fontStyle="italic">
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
