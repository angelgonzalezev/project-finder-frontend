export enum PlacementEnum {
	TopStart = "top-start",
	Top = "top",
	TopEnd = "top-end",
	BottomStart = "bottom-start",
	Bottom = "bottom",
	BottomEnd = "bottom-end",
}

export type Placement = `${PlacementEnum}`;

export type Offsets = string | Record<"left" | "right" | "bottom" | "top", string> | undefined;
