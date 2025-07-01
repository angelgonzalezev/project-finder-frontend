/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center } from "@chakra-ui/react";
import Image from "next/image";

interface TagComponentProps {
	label: string;
	bgColor?: string;
	icon?: any;
}
const TagComponent = (props: TagComponentProps) => {
	const { label, bgColor = "white", icon } = props;
	return (
		<Center
			textStyle="regularXs"
			px="8px"
			py="6px"
			borderRadius="6px"
			bgColor={bgColor}
			color="allGrey9"
			gap="6px"
			w="fit-content"
		>
			{icon && <Image src={icon} alt="design icon" height={12} width={12} />}
			{label}
		</Center>
	);
};
export default TagComponent;
