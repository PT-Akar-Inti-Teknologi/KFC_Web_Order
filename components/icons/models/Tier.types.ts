import { ReactNode, SVGProps } from "react";

export type TierProps = Readonly<SVGProps<SVGSVGElement>>;
export type TierListItem = {
    Component: ReactNode,
    title: string
}

export type TierType = "basic" | "gold" | "platinum"
