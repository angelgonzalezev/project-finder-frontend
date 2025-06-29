import AccordionRootComponent from "@/components/AccordionComponent/AccordionRootComponent";
import AccordionItemComponent from "@/components/AccordionComponent/AccordionItemComponent";
import { Colors } from "@/constants/colors";
import { ProjectFaq } from "@/types/project";
import { Text } from "@chakra-ui/react";

interface FaqComponentProps {
	projectFaqs: ProjectFaq[];
}
const FaqComponent = (props: FaqComponentProps) => {
	const { projectFaqs } = props;
	return (
		<AccordionRootComponent>
			{projectFaqs.map((faq: ProjectFaq, index: number) => (
				<AccordionItemComponent title={faq.question} key={index} index={index}>
					<Text fontSize="12px" lineHeight="16px" color={Colors.TextGrey8} mt="8px">
						{faq.answer}
					</Text>
				</AccordionItemComponent>
			))}
		</AccordionRootComponent>
	);
};
export default FaqComponent;
