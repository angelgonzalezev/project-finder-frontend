import { Box, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { RadioItem, RadioItemValues } from "./types";
import { OrderEnum } from "@/types/filters";

const items: RadioItem[] = [
	{ label: "Fecha de publicación (Más reciente primero)", value: RadioItemValues.DESC },
	{ label: "Fecha de publicación (Más antiguo primero)", value: RadioItemValues.ASC },
];

interface OrderSelectorComponentProps {
	value: OrderEnum | null;
	setValue: (e: OrderEnum | null) => void;
}

const OrderSelectorComponent = (props: OrderSelectorComponentProps) => {
	const { value, setValue } = props;

	const handleOnValueChange = (e: string | null) => {
		if (e !== null) {
			const selOrder = OrderEnum[e as keyof typeof OrderEnum];
			setValue(selOrder as OrderEnum);
		} else {
			setValue(null);
		}
	};
	return (
		<Box>
			<Text textStyle="regularMd" mb={2}>
				Ordenar por
			</Text>
			<RadioGroup.Root mt="16px" variant="solid" value={value} onValueChange={(e) => handleOnValueChange(e.value)}>
				<Stack gap="8px" textStyle="regularSm">
					{items.map((item) => (
						<RadioGroup.Item key={item.value} value={item.value}>
							<RadioGroup.ItemHiddenInput />
							<RadioGroup.ItemIndicator />
							<RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
						</RadioGroup.Item>
					))}
				</Stack>
			</RadioGroup.Root>
		</Box>
	);
};
export default OrderSelectorComponent;
