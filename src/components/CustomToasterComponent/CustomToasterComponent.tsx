"use client";

import { Toaster as ChakraToaster, Portal, Stack, Toast, createToaster } from "@chakra-ui/react";
import { Placement, Offsets } from "./types";

export const createCustomToaster = (placement: Placement = "top", offsets?: Offsets) =>
	createToaster({
		placement,
		pauseOnPageIdle: true,
		offsets,
	});

export const toaster = createCustomToaster("top");

export const CustomToasterComponent = ({
	toasterInstance = toaster,
}: {
	toasterInstance?: ReturnType<typeof createToaster>;
}) => {
	return (
		<Portal>
			<ChakraToaster toaster={toasterInstance}>
				{(toast) => (
					<Toast.Root bgColor="allGreen2" textStyle="regularMd" color="textGreen8" px="16px" py="8px" w="fit-content">
						<Stack gap="1" maxWidth="100%" textAlign="center">
							{toast.title && <Toast.Title whiteSpace="nowrap">{toast.title}</Toast.Title>}
							{toast.description && <Toast.Description>{toast.description}</Toast.Description>}
						</Stack>
						{toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
						{toast.closable && <Toast.CloseTrigger />}
					</Toast.Root>
				)}
			</ChakraToaster>
		</Portal>
	);
};
