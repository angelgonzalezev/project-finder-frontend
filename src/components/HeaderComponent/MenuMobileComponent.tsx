"use client";

import { Center } from "@chakra-ui/react";
import Image from "next/image";
import MenuIcon from "@/assets/icons/MenuIcon.svg";
import ShakersIcon from "@/assets/icons/ShakersIcon.svg";

const MenuMobileComponent = () => {
	return (
		<Center display={{ md: "none" }}>
			<Center p="6px">
				<Image src={MenuIcon} height={8} alt="menu icon" />
			</Center>
			<Center p="6px">
				<Center borderRadius="2px" w="16px" h="16px" bgColor="allYellow6">
					<Image src={ShakersIcon} height={10} alt="shakers icon" />
				</Center>
			</Center>
		</Center>
	);
};
export default MenuMobileComponent;
