import { Center } from "@chakra-ui/react";
import Image from "next/image";
import AvatarImage from "@/assets/images/avatar-image.jpg";

const AvatarImageComponent = () => {
	return (
		<Center boxSize="24px" position="relative" overflow="hidden" borderRadius="4px">
			<Image src={AvatarImage} alt="profile image" fill={true} style={{ objectFit: "cover", borderRadius: "4px" }} />
		</Center>
	);
};
export default AvatarImageComponent;
