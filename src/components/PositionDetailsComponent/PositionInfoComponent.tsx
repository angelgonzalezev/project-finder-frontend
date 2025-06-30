import mockCategories from "@/mockData/mockCategories";
import mockSkills from "@/mockData/mockSkills";
import mockSubCategories from "@/mockData/mockSubCategories";
import { Category } from "@/types/category";
import { Project } from "@/types/project";
import { Skill } from "@/types/skill";
import { SubCategory } from "@/types/subcategory";
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
	const { category } = project;
	const projectCategory = mockCategories.find((_category: Category) => _category.id === category);
	const projectSubcategory = mockSubCategories.find(
		(_subcategory: SubCategory) => _subcategory.categoryId === projectCategory?.id
	);

	const projectTitle = project.title;
	const categoryName = projectCategory?.name;
	const subcategoryName = projectSubcategory?.name;
	const projectBudget = project.budget;
	const projectOrganization = project.organization;

	const getSelectedSkills = (ids: number[], skills: Skill[]): Skill[] => {
		const idSet = new Set(ids);
		return skills.filter((skill) => idSet.has(skill.id));
	};

	const skills = getSelectedSkills(project.positions[0].skills, mockSkills);

	return (
		<Link href={`/${project.id}`} passHref>
			<Stack flexDir="row" key={project.id} borderWidth="1px" borderColor="allGrey4" borderRadius="8px" gap={0}>
				<HStack flex={1} p={{ base: "12px", md: "24px" }}>
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
