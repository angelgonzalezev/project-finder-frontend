import { Colors } from "@/constants/colors";
import { Accordion, Span } from "@chakra-ui/react";
import { useState } from "react";

interface AccordionComponentProps {
	title: string;
	children: React.ReactNode;
}
const AccordionComponent = (props: AccordionComponentProps) => {
	const { title, children } = props;
	const [value, setValue] = useState(["second-item"]);

	return (
		<Accordion.Root multiple collapsible value={value} onValueChange={(e) => setValue(e.value)}>
			<Accordion.Item value={"a"} px="16px" py="12px" bgColor={Colors.SurfaceGreen2} borderRadius="md" borderWidth="0">
				<Accordion.ItemTrigger bgColor={Colors.SurfaceGreen2} cursor="pointer">
					<Span flex="1" fontStyle="italic">
						{title}
					</Span>
					<Accordion.ItemIndicator />
				</Accordion.ItemTrigger>
				<Accordion.ItemContent>
					<Accordion.ItemBody>{children}</Accordion.ItemBody>
				</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion.Root>
	);
};
export default AccordionComponent;
