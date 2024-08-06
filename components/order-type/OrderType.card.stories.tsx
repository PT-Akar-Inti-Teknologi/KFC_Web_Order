import { Meta, StoryObj } from "@storybook/react";
import OrderTypeCard from "./OrderType.card";
import { orderTypeData } from "./OrderType.utils"
const meta:Meta<typeof OrderTypeCard> = {
    title: "Molecules/Cards/Order Type",
    component: OrderTypeCard,
    parameters: {
      layout: "centered"
    }
};

export default meta;

type Story = StoryObj<typeof OrderTypeCard>;
export const Desktop: Story = {
    args: {
        ...orderTypeData[0],
        variant: "desktop",
    }
}
export const Mobile: Story = {
    args: {
      ...orderTypeData[0],
      variant: "mobile",
    },
}