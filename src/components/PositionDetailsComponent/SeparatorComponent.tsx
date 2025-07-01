import { Span } from "@chakra-ui/react";

interface SeparatorComponentProps {
	children: React.ReactNode;
}
const SeparatorComponent = ({ children }: SeparatorComponentProps) => {
	return (
		<>
			<Span mx="1"> | </Span>
			{children}
		</>
	);
};
export default SeparatorComponent;
