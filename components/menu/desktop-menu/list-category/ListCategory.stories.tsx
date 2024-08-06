import { Meta, StoryObj } from "@storybook/react";
import ListCategory from "./ListCategory";

const meta: Meta<typeof ListCategory> = {
    title: "Organism/Menu/DesktopMenu/ListCategory",
    component: ListCategory,
}

export default meta;

type Story = StoryObj<typeof ListCategory>;

export const Default: Story = {}