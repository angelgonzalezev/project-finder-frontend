import { Stack, Text } from "@chakra-ui/react";
import InfoSectionComponent from "./InfoSectionComponent";
import FaqComponent from "./FaqComponent";
import { ProjectFaq } from "@/types/project";

interface ProjectInfoComponentProps {
	projectDescription: string;
	projectGoals: string[];
	projectFaqs: ProjectFaq[];
}
const ProjectInfoComponent = (props: ProjectInfoComponentProps) => {
	const { projectDescription, projectGoals, projectFaqs } = props;
	return (
		<Stack gap={0}>
			<InfoSectionComponent title="Descripción del Proyecto" isMain={true}>
				<Text fontSize="14px" lineHeight="20px" color="textGrey8">
					{projectDescription}
				</Text>
			</InfoSectionComponent>

			<InfoSectionComponent title="¿Cuáles son los objetivos y tareas a realizar?">
				<Stack listStyleType="circle" fontSize="14px" lineHeight="20px" color="textGrey8">
					{projectGoals.map((goal: string, index: number) => (
						<li key={index}>{goal}</li>
					))}
				</Stack>
			</InfoSectionComponent>

			<InfoSectionComponent title="Preguntas Frecuentes" isMain={true}>
				<FaqComponent projectFaqs={projectFaqs} />
			</InfoSectionComponent>
		</Stack>
	);
};
export default ProjectInfoComponent;
