import { ProjectOrganization } from "@/types/project";
import { Image, Text, VStack } from "@chakra-ui/react";

interface OrganizationLogoComponentProps {
	projectOrganization: ProjectOrganization;
}

const OrganizationLogoComponent = (props: OrganizationLogoComponentProps) => {
	const { projectOrganization } = props;
	return (
		<VStack>
			<Image
				src={projectOrganization.logo}
				w="82px"
				h="82px"
				alt="organization logo"
				borderRadius="6px"
				objectFit="contain"
			/>
			<Text textStyle="regularXs" color="textGrey6" mt="8px" maxWidth="82px" textAlign="center">
				{projectOrganization.name}
			</Text>
		</VStack>
	);
};
export default OrganizationLogoComponent;
