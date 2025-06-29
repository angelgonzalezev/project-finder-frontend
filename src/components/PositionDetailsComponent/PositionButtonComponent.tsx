import { Colors } from "@/constants/colors";
import { Stack } from "@chakra-ui/react";
import NextImage from "next/image";
import ButtonIcon from "@/assets/icons/ButtonIcon.svg";
import Link from "next/link";

interface PositionButtonComponentProps {
	projectId: number;
}
const PositionButtonComponent = (props: PositionButtonComponentProps) => {
	const { projectId } = props;
	return (
		<Link href={`/${projectId}`} passHref>
			<Stack
				w="48px"
				h="100%"
				alignItems="center"
				justifyContent="center"
				borderLeftWidth="1px"
				borderLeftColor={Colors.AllGrey4}
				cursor="pointer"
			>
				<NextImage src={ButtonIcon} alt="button icon" width={24} height={24} />
			</Stack>
		</Link>
	);
};
export default PositionButtonComponent;
