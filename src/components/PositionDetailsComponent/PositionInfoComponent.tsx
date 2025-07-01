import { Project } from "@/types/project";
import { HStack, Stack } from "@chakra-ui/react";
import OrganizationLogoComponent from "./OrganizationLogoComponent";
import PositionInfoDetailsComponent from "./PositionInfoDetailsComponent";
import PositionButtonComponent from "./PositionButtonComponent";
import Link from "next/link";

interface ProjectInformationProps {
	project: Project;
}

const PositionInfoComponent = (props: ProjectInformationProps) => {
	const { project } = props;
	const { category, subcategory } = project;

	const projectTitle = project.title;
	const categoryName = category.name;
	const subcategoryName = subcategory?.name;
	const projectBudget = project.budget;
	const projectOrganization = project.organization;
	const skills = project.positions[0].skills;
	console.log("🚀 ~ PositionInfoComponent ~ skills:", skills);

	return (
		<Link href={`/${project.id}`} passHref>
			<Stack flexDir="row" key={project.id} borderWidth="1px" borderColor="allGrey4" borderRadius="8px" gap={0}>
				<HStack flex={1} p={{ base: "12px", md: "24px" }} align="start">
					<OrganizationLogoComponent projectOrganization={projectOrganization} />
					<PositionInfoDetailsComponent
						projectTitle={projectTitle}
						categoryName={categoryName}
						subcategoryName={subcategoryName}
						projectBudget={projectBudget}
						skills={skills}
					/>
				</HStack>
				<PositionButtonComponent />
			</Stack>
		</Link>
	);
};
export default PositionInfoComponent;
