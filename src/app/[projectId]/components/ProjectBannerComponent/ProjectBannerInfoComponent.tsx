import TagComponent from "@/components/TagComponent";
import { Stack } from "@chakra-ui/react";
import CalendarIcon from "@/assets/icons/CalendarIcon.svg";
import ClockIcon from "@/assets/icons/ClockIcon.svg";
import EuroIcon from "@/assets/icons/EuroIcon.svg";
import UsersIcon from "@/assets/icons/UsersIcon.svg";

interface ProjectBannerInfoComponentProps {
	startDate: string;
	totalHours: number;
	estimatedBudget: number;
	positions: number;
}
const ProjectBannerInfoComponent = (props: ProjectBannerInfoComponentProps) => {
	const { startDate, totalHours, estimatedBudget, positions } = props;

	return (
		<Stack flexDirection="row" wrap="wrap">
			<TagComponent icon={CalendarIcon} label={`Inicio: ${startDate}`} />
			<TagComponent icon={ClockIcon} label={`${totalHours} horas`} />
			<TagComponent icon={EuroIcon} label={`${estimatedBudget} € (Estimado)`} />
			<TagComponent icon={UsersIcon} label={`${positions} Talentos`} />
		</Stack>
	);
};
export default ProjectBannerInfoComponent;
