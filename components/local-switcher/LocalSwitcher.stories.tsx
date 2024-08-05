import { Meta, StoryObj } from "@storybook/react";
import LocalSwitcher from "./LocalSwitcher";

const meta: Meta<typeof LocalSwitcher> = {
  title: "Molecules/Select/LocalSwitcher",
  component: LocalSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LocalSwitcher>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "primary",
    },
  },
};
