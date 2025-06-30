import { FilterOption } from "@/types/filters";
import { Box, Text } from "@chakra-ui/react";

interface OptionsListComponentProps {
	filteredOptions: FilterOption[];
	onSelect: (e: FilterOption) => void;
}
const OptionsListComponent = (props: OptionsListComponentProps) => {
	const { filteredOptions, onSelect } = props;
	return (
		<Box
			position="absolute"
			top="100%"
			left={0}
			right={0}
			bg="white"
			borderWidth="1px"
			borderColor="allGrey4"
			borderRadius="sm"
			maxH="200px"
			overflowY="auto"
			zIndex={10}
		>
			<Box as="ul">
				{filteredOptions.map((opt: FilterOption) => (
					<Box key={opt.id} px={4} py={2} _hover={{ bg: "gray.100", cursor: "pointer" }} onClick={() => onSelect(opt)}>
						<Text>{opt.name}</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};
export default OptionsListComponent;
