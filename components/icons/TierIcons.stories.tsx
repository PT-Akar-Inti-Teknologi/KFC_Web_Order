import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import BasicTierIcon from "./icon-collections/tier-icons/BasicTierIcon";
import GoldTierIcon from "./icon-collections/tier-icons/GoldTierIcon";
import PlatinumTierIcon from "./icon-collections/tier-icons/PlatinumTierIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/Tier",
  tags: ["autodocs"],
 
};

export default meta;

type Story = StoryObj<IconProps>;

export const BasicTier: Story = {
  render: (args) => <BasicTierIcon {...args} />,
};

export const GoldTier: Story = {
  render: (args) => <GoldTierIcon {...args} />,
};

export const PlatinumTier: Story = {
  render: (args) => <PlatinumTierIcon {...args} />,
};

