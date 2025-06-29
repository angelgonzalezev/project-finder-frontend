import { Flex, Portal } from "@chakra-ui/react";

interface CustomModalContainerProps {
	onClose: () => void;
	children: React.ReactNode;
}
const CustomModalContainer = (props: CustomModalContainerProps) => {
	const { onClose, children } = props;
	return (
		<Portal>
			<Flex
				position="fixed"
				top={0}
				left={0}
				right={0}
				bottom={0}
				backdropFilter="blur(5px)"
				bgColor="#E4E7E780"
				align="center"
				justify="center"
				zIndex={1400}
				onClick={onClose}
			>
				{children}
			</Flex>
		</Portal>
	);
};
export default CustomModalContainer;
