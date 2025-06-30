import { Colors } from "@/constants/colors";
import { Span, Stack } from "@chakra-ui/react";

interface ReferralBonusComponentProps {
	referralBonus: number;
}

const ReferralBonusComponent = (props: ReferralBonusComponentProps) => {
	const { referralBonus } = props;

	return (
		<Stack
			flexDirection="row"
			gap="6px"
			alignItems="center"
			bgColor="surfaceGreen2"
			color="textGreen8"
			px="8px"
			py="6px"
			borderRadius="6px"
			w="fit-content"
		>
			<Span fontSize="12px" lineHeight="16px">
				€
			</Span>
			<Span fontSize="12px" lineHeight="16px">
				¡Gana {`${referralBonus}`}€ por referir!
			</Span>
		</Stack>
	);
};
export default ReferralBonusComponent;
