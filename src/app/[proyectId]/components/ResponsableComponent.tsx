import { Colors } from "@/constants/colors";
import { ProjectLeader, ProjectOrganization } from "@/types/project";
import { Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import ResponsableImage from "@/assets/images/avatar-image.jpg";

interface ResponsableComponentProps {
	projectOrganization: ProjectOrganization;
	projectResponsable: ProjectLeader;
}
const ResponsableComponent = (props: ResponsableComponentProps) => {
	const { projectOrganization, projectResponsable } = props;

	return (
		<Stack>
			<Stack
				flexDirection="column"
				borderWidth="1px"
				borderColor="allGrey4"
				borderRadius="12px"
				p="24px"
				w="fit-content"
				gap="16px"
			>
				<HStack>
					<Image src={projectOrganization.logo} h="24px" w="24px" alt="orgnization logo" borderRadius="4px" />
					<Text fontSize="16px" lineHeight="22px">
						{projectOrganization.name}
					</Text>
				</HStack>
				<Center h="252px" w="252px" position="relative">
					<NextImage
						src={ResponsableImage}
						alt="orgnization logo"
						fill
						style={{ objectFit: "cover", borderRadius: "6px" }}
					/>
				</Center>
				<Stack>
					<Text fontSize="20px" lineHeight="140%" color="allGrey9">
						{projectResponsable.name} {projectResponsable.lastName}
					</Text>
					<Text fontSize="16px" lineHeight="22px" color="textGrey8">
						Project Owner
					</Text>
				</Stack>
			</Stack>
		</Stack>
	);
};
export default ResponsableComponent;
