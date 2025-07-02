"use client";

import { Accordion } from "@chakra-ui/react";
import { useState } from "react";

interface AccordionRootComponentProps {
	children: React.ReactNode;
	collapsible?: boolean;
	setSelectedValue?: (e: string) => void;
}
const AccordionRootComponent = (props: AccordionRootComponentProps) => {
	const { children, collapsible = false, setSelectedValue } = props;
	const [value, setValue] = useState(["0"]);

	const handleOnChange = (e: string[]) => {
		setValue(e);
		if (setSelectedValue) {
			setSelectedValue(e[0]);
		}
	};

	return (
		<Accordion.Root value={value} onValueChange={(e) => handleOnChange(e.value)} collapsible={collapsible}>
			{children}
		</Accordion.Root>
	);
};
export default AccordionRootComponent;
