/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center } from "@chakra-ui/react";
import Image from "next/image";

interface TagComponentProps {
	key?: number;
	label: string;
	bgColor?: string;
	icon?: any;
}
const TagComponent = (props: TagComponentProps) => {
	const { key = 0, label, bgColor = "white", icon } = props;
	return (
		<Center
			key={key}
			textStyle="regularXs"
			px="8px"
			py="6px"
			borderRadius="6px"
			bgColor={bgColor}
			color="allGrey9"
			gap="6px"
		>
			{icon && <Image src={icon} alt="design icon" height={12} width={12} />}
			{label}
		</Center>
	);
};
export default TagComponent;
