import { ReactNode } from "react";

export interface DefaultProps {
	id?: string,
	name?: string
	className?: string,
	children: ReactNode,
}