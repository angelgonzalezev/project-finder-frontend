import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import CloseBoxIcon from "@/assets/icons/CloseBoxIcon.svg";
import { Colors } from "@/constants/colors";
import { FilterOption } from "@/types/filters";

interface SelectedOptionComponentProps {
	option: FilterOption;
	onUnSelect: (option: FilterOption) => void;
}
const SelectedOptionComponent = (props: SelectedOptionComponentProps) => {
	const { option, onUnSelect } = props;

	return (
		<HStack key={option.id} py="4px" px="4px" bgColor="surfaceGreen2" borderRadius="sm" gap="6px">
			<Text fontSize="10px" lineHeight="14px">
				{option.name}
			</Text>
			<Image src={CloseBoxIcon} height={11.67} width={11.67} alt="close box icon" onClick={() => onUnSelect(option)} />
		</HStack>
	);
};
export default SelectedOptionComponent;
