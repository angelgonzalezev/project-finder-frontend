import { ProjectOrganization } from "@/types/project";
import { Image, Text, VStack } from "@chakra-ui/react";

interface OrganizationLogoComponentProps {
	projectOrganization: ProjectOrganization;
}

const OrganizationLogoComponent = (props: OrganizationLogoComponentProps) => {
	const { projectOrganization } = props;
	return (
		<VStack gap="8px">
			<Image
				src={projectOrganization.logo}
				w="82px"
				h="82px"
				alt="organization logo"
				borderRadius="6px"
				objectFit="contain"
			/>
			<Text textStyle={{ base: "regularXxs", md: "regularXs" }} color="textGrey6" maxWidth="82px" textAlign="center">
				{projectOrganization.name}
			</Text>
		</VStack>
	);
};
export default OrganizationLogoComponent;
