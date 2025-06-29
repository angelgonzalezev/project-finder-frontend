import { Center } from "@chakra-ui/react";
import ChevronIcon from "@/assets/icons/ChevronIcon.svg";
import Image from "next/image";

interface ChevronIconComponentProps {
	rotationDeg?: number;
	height?: number;
	width?: number;
}
const ChevronIconComponent = (props: ChevronIconComponentProps) => {
	const { rotationDeg = 0, height = 12, width = 12 } = props;
	return (
		<Center p={0} m={0} transform={`rotate(${rotationDeg}deg)`}>
			<Image src={ChevronIcon} alt="chevron icon" height={height} width={width} />
		</Center>
	);
};
export default ChevronIconComponent;
