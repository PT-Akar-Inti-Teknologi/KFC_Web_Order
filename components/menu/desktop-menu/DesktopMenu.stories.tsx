import { Meta, StoryObj } from "@storybook/react";
import DesktopMenu from "./DesktopMenu";

const meta: Meta<typeof DesktopMenu> = {
    title: "Organism/Menu/DesktopMenu",
    component: DesktopMenu,
}

export default meta;

type Story = StoryObj<typeof DesktopMenu>;

export const Default: Story = {}