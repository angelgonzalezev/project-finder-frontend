/* eslint-disable @typescript-eslint/no-explicit-any */
import { Colors } from "@/constants/colors";
import { Center } from "@chakra-ui/react";
import Image from "next/image";

interface TagComponentProps {
	key?: number;
	label: string;
	bgColor?: Colors;
	icon?: any;
}
const TagComponent = (props: TagComponentProps) => {
	const { key = 0, label, bgColor = Colors.SurfaceGrey0, icon } = props;
	return (
		<Center
			key={key}
			px="8px"
			py="6px"
			borderRadius="6px"
			bgColor={bgColor}
			color={Colors.Grey9}
			fontSize="12px"
			lineHeight="16px"
			letterSpacing="0px"
			gap="6px"
		>
			{icon && <Image src={icon} alt="design icon" height={12} width={12} />}
			{label}
		</Center>
	);
};
export default TagComponent;
