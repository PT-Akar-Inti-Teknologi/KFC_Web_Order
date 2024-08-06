import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import StartBadgeIcon from "./icon-collections/best-seller/StarBadgeIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/Best Seller",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<IconProps>;

export const StarBadge: Story = {
  render: (props) => <StartBadgeIcon {...props} />,
};

