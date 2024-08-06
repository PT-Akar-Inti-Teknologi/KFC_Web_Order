import { Meta, StoryObj } from "@storybook/react";
import OthersCategory from "./OthersCategory";
import OthersIcon from "@/components/icons/icon-collections/category-icons/OthersIcon";

const meta: Meta<typeof OthersCategory> = {
    title: "Organism/Menu/DesktopMenu/OthersCategory",
    component: OthersCategory,
}

export default meta;

type Story = StoryObj<typeof OthersCategory>;

export const Default: Story = {
    args: {
        title: "Others",
        icon: <OthersIcon />
    }
}