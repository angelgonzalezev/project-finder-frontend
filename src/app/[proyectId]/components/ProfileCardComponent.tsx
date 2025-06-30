import { Colors } from "@/constants/colors";
import { Stack, Text } from "@chakra-ui/react";

interface ProfileCardComponentProps {
	title: string;
	children: React.ReactNode;
}
const ProfileCardComponent = (props: ProfileCardComponentProps) => {
	const { title, children } = props;
	return (
		<Stack gap="12px">
			<Text fontSize="18px" lineHeight="26px" color={Colors.TextGreen8}>
				{title}
			</Text>
			{children}
		</Stack>
	);
};
export default ProfileCardComponent;
