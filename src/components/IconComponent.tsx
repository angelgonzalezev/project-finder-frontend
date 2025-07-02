/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center } from "@chakra-ui/react";
import Image from "next/image";

interface IconComponentProps {
	rotationDeg?: number;
	height?: number;
	width?: number;
	icon: any;
}
const IconComponent = (props: IconComponentProps) => {
	const { rotationDeg = 0, height = 12, width = 12, icon } = props;
	return (
		<Center p={0} m={0} transform={`rotate(${rotationDeg}deg)`}>
			<Image src={icon} alt="chevron icon" height={height} width={width} />
		</Center>
	);
};
export default IconComponent;
