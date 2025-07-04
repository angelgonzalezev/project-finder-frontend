import { HStack, Stack, Text } from "@chakra-ui/react";
import DesignIcon from "@/assets/icons/DesignIcon.svg";
import TagComponent from "@/components/TagComponent";
import ProjectBannerInfoComponent from "./ProjectBannerInfoComponent";

interface ProjectBannerComponentProps {
	title: string;
	category: string;
	subCategory: string;
	startDate: string;
	totalHours: number;
	estimatedBudget: number | null;
	positions: number;
}
const ProjectBannerComponent = (props: ProjectBannerComponentProps) => {
	const { title, category, subCategory, startDate, totalHours, estimatedBudget, positions } = props;
	return (
		<Stack py="24px" px="40px" bgColor="textGreen8" borderRadius="md" gap="8px">
			<HStack justifyContent="space-between">
				<Text textStyle="headingXxl" color="white">
					{title}
				</Text>
				<Stack display={{ base: "none", md: "block" }}>
					<TagComponent label={category} bgColor="surfaceGreen2" icon={DesignIcon} />
				</Stack>
			</HStack>
			<Text textStyle="regularLg" color="white">
				{subCategory}
			</Text>
			<ProjectBannerInfoComponent
				startDate={startDate}
				totalHours={totalHours}
				estimatedBudget={estimatedBudget}
				positions={positions}
			/>
		</Stack>
	);
};
export default ProjectBannerComponent;
