"use client";

import { Accordion } from "@chakra-ui/react";
import { useState } from "react";

interface AccordionRootComponentProps {
	children: React.ReactNode;
	collapsible?: boolean;
}
const AccordionRootComponent = (props: AccordionRootComponentProps) => {
	const { children, collapsible = false } = props;
	const [value, setValue] = useState(["0"]);

	return (
		<Accordion.Root value={value} onValueChange={(e) => setValue(e.value)} collapsible={collapsible}>
			{children}
		</Accordion.Root>
	);
};
export default AccordionRootComponent;
