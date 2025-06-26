import { Colors } from "@/constants/colors";
import mockCategories from "@/mockData/mockCategories";
import mockProjects from "@/mockData/mockProjects";
import mockSkills from "@/mockData/mockSkills";
import mockSubCategories from "@/mockData/mockSubCategories";
import { Category } from "@/types/category";
import { Project } from "@/types/project";
import { Skill } from "@/types/skill";
import { SubCategory } from "@/types/subcategory";
import { Center, HStack, Image, Span, Stack, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import ButtonIcon from "@/assets/icons/ButtonIcon.svg";

export default function Home() {
	const renderProject = (project: Project) => {
		const { category } = project;
		const projectCategory = mockCategories.find((_category: Category) => _category.id === category);
		const projectSubcategory = mockSubCategories.find(
			(_subcategory: SubCategory) => _subcategory.categoryId === projectCategory?.id
		);

		const projectTitle = project.title;
		const categoryName = projectCategory?.name;
		const subcategoryName = projectSubcategory?.name;
		const budgetFrom = project.budget.hourFrom;
		const budgetTo = project.budget.hourTo;
		const totalBudget = project.budget.total;
		const organizationLogo = project.organization.logo;
		const organizationName = project.organization.name;

		const getSelectedSkills = (ids: number[], skills: Skill[]): Skill[] => {
			const idSet = new Set(ids);
			return skills.filter((skill) => idSet.has(skill.id));
		};

		const skills = getSelectedSkills(project.positions[0].skills, mockSkills);

		return (
			<Stack
				flexDir="row"
				key={project.id}
				borderWidth="1px"
				borderColor={Colors.Grey4}
				borderRadius="16px"
				gap={0}
				data-state="open"
				_open={{
					animation: "slide-fade-in 2000ms ease-out",
				}}
			>
				<HStack flex={1} p="24px">
					<VStack>
						<Image
							src={organizationLogo}
							w="82px"
							h="82px"
							alt="organization logo"
							borderRadius="6px"
							objectFit="contain"
						/>
						<Text
							fontSize="12px"
							lineHeight="16px"
							color={Colors.TextGrey6}
							mt="8px"
							maxWidth="82px"
							whiteSpace="normal"
							wordBreak="break-word"
							textAlign="center"
						>
							{organizationName}
						</Text>
					</VStack>
					<Stack gap="12px">
						<Text fontSize="18px" lineHeight="26px">
							{projectTitle}
						</Text>
						<HStack>
							<Text fontWeight="medium" fontSize="14px" lineHeight="20px" color={Colors.TextGreen6}>
								<Span>{categoryName}</Span>
								<Span mx="1"> | </Span>
								{subcategoryName ? <Span>{subcategoryName}</Span> : null}
								<Span mx="1"> | </Span>
								{totalBudget ? (
									<Span>{totalBudget}€</Span>
								) : (
									<>
										<Span mr="1" color={Colors.Green4}>
											€
										</Span>
										<Span>
											{budgetFrom} - {budgetTo}€/h
										</Span>
									</>
								)}
							</Text>
						</HStack>
						<HStack>
							{skills.map((skill) => (
								<Center
									key={skill.id}
									px="8px"
									py="6px"
									borderRadius="6px"
									bgColor={Colors.Grey2}
									color={Colors.Grey9}
									fontSize="12px"
									lineHeight="16px"
									letterSpacing="0px"
								>
									{skill.name}
								</Center>
							))}
						</HStack>
					</Stack>
				</HStack>
				<Stack
					w="48px"
					alignItems="center"
					justifyContent="center"
					borderLeftWidth="1px"
					borderLeftColor={Colors.Grey4}
					cursor="pointer"
				>
					<NextImage src={ButtonIcon} alt="button icon" width={24} height={24} />
				</Stack>
			</Stack>
		);
	};

	return (
		<Stack flex={1} px="40px" gap="40px">
			{mockProjects.map((project: Project) => renderProject(project))}
		</Stack>
	);
}
