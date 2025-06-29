import { Box } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionBox = motion(Box);

interface MotionBoxContainerProps {
	children: React.ReactNode;
}

const MotionBoxContainer = ({ children }: MotionBoxContainerProps) => {
	return (
		<MotionBox
			onClick={(e) => e.stopPropagation()}
			bg="white"
			borderRadius="lg"
			maxW="580px"
			w="90%"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 100, opacity: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			{children}
		</MotionBox>
	);
};
export default MotionBoxContainer;
