"use client";

import {
	createCustomToaster,
	CustomToasterComponent,
} from "@/components/CustomToasterComponent/CustomToasterComponent";
import { PlacementEnum } from "@/components/CustomToasterComponent/types";
import { ProjectPosition } from "@/types/project";
import { formatSkillList } from "@/utils/utils";
import { Button, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import AppliedTagComponent from "./AppliedTagComponent";

interface PositionComponentProps {
	position: ProjectPosition;
}
const PositionComponent = (props: PositionComponentProps) => {
	const { position } = props;
	const { skills } = position;
	const [applied, setApplied] = useState<boolean>(false);

	const toastPlacement = useBreakpointValue({
		base: PlacementEnum.Top,
		md: PlacementEnum.TopEnd,
	});

	const toastOffsets = { top: "80px", bottom: "20px", left: "20px", right: "20px" };

	const toaster = createCustomToaster(toastPlacement, toastOffsets);

	const handleOnApply = () => {
		const currentValue = applied;

		if (currentValue === false) toaster.create({ title: "Aplicación enviada con éxito" });

		setApplied(!currentValue);
	};

	const getButtonStyles = () =>
		applied
			? { color: "textRed6", borderWidth: "1px", borderColor: "allRed6" }
			: { bgColor: "allYellow6", color: "allGrey9" };

	return (
		<Stack
			flexDirection="column"
			borderWidth="1px"
			borderColor="allGrey4"
			borderRadius="12px"
			p="24px"
			w="300px"
			gap="16px"
			maxW="600px"
			minW="208px"
		>
			{applied && <AppliedTagComponent />}
			<Stack>
				<Text textStyle="headingXl" color="allGrey9">
					{position.title}
				</Text>
				<Text textStyle="regularSm" color="textGrey8">
					{formatSkillList(skills)}
				</Text>
			</Stack>
			<Button textStyle="regularSm" borderRadius="md" {...getButtonStyles()} onClick={handleOnApply}>
				{applied ? "Retirar Candidatura" : "Aplicar"}
			</Button>
			<CustomToasterComponent toasterInstance={toaster} />
		</Stack>
	);
};
export default PositionComponent;
