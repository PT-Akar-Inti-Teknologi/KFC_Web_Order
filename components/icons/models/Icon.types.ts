import { ReactNode, SVGProps } from "react";

export type IconProps = Readonly<SVGProps<SVGSVGElement>>;
export type IconListItem = {
    Component: ReactNode,
    title: string
}