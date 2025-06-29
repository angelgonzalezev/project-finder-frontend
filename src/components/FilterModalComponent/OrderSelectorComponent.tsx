import { Box, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { RadioItem, RadioItemValues } from "./types";

const items: RadioItem[] = [
	{ label: "Fecha de publicación (Más reciente primero)", value: RadioItemValues.DESC },
	{ label: "Fecha de publicación (Más antiguo primero)", value: RadioItemValues.ASC },
];

interface OrderSelectorComponentProps {
	value: string | null;
	setValue: (e: string | null) => void;
}

const OrderSelectorComponent = (props: OrderSelectorComponentProps) => {
	const { value, setValue } = props;
	return (
		<Box>
			<Text fontWeight="bold" mb={2}>
				Ordenar por
			</Text>
			<RadioGroup.Root mt="16px" variant="solid" value={value} onValueChange={(e) => setValue(e.value)}>
				<Stack gap="8px">
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
