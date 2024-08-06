import { Meta, StoryObj } from "@storybook/react";
import OrderTypeSection from "./OrderTypeSection";

const meta:Meta<typeof OrderTypeSection> = {
    title: "Organism/Sections/Order Type",
    component: OrderTypeSection,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OrderTypeSection>;
export const Desktop: Story = {
    args: {
        title: "Hungry today? let’s order",
    }
}
export const Mobile: Story = {
    args: {
        title: "Hungry today? let’s order",
    },
    parameters: {
        viewport: {
            defaultViewport: "figma"
        }
    }
}