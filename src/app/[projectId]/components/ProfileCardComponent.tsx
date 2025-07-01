import { Stack, Text } from "@chakra-ui/react";

interface ProfileCardComponentProps {
	title: string;
	children: React.ReactNode;
}
const ProfileCardComponent = (props: ProfileCardComponentProps) => {
	const { title, children } = props;
	return (
		<Stack gap="12px">
			<Text textStyle="fixedRegularLg" color="textGreen8">
				{title}
			</Text>
			{children}
		</Stack>
	);
};
export default ProfileCardComponent;
