"use client";

import AccordionRootComponent from "@/components/AccordionComponent/AccordionRootComponent";
import AccordionItemComponent from "@/components/AccordionComponent/AccordionItemComponent";
import { ProjectFaq } from "@/types/project";
import { Text } from "@chakra-ui/react";
import { useState } from "react";

interface FaqComponentProps {
	projectFaqs: ProjectFaq[];
}
const FaqComponent = (props: FaqComponentProps) => {
	const { projectFaqs } = props;
	const [selectedValue, setSelectedValue] = useState<string>("");
	return (
		<AccordionRootComponent setSelectedValue={setSelectedValue}>
			{projectFaqs.map((faq: ProjectFaq, index: number) => (
				<AccordionItemComponent
					title={faq.question}
					key={index}
					index={index}
					isFaq={true}
					selectedValue={selectedValue}
				>
					<Text textStyle="fixedRegularXs" color="textGrey8" mt="8px">
						{faq.answer}
					</Text>
				</AccordionItemComponent>
			))}
		</AccordionRootComponent>
	);
};
export default FaqComponent;
