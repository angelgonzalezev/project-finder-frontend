import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import ChatIcon from "@/assets/icons/ChatIcon.svg";
import BellIcon from "@/assets/icons/BellIcon.svg";
import AvatarImageComponent from "./AvatarImageComponent";

const HeaderOptionsComponent = () => {
	return (
		<HStack gap={3}>
			<Image src={ChatIcon} alt="chat icon" height={18} />
			<Image src={BellIcon} alt="bell icon" height={18} />
			<AvatarImageComponent />
		</HStack>
	);
};
export default HeaderOptionsComponent;
