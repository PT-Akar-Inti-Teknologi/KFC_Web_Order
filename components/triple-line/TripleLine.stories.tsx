import type { Meta, StoryObj } from "@storybook/react";
import TripleLine from "./TripleLine";

const meta: Meta<typeof TripleLine> = {
  title: "Atoms/Accent/TripleLine",
  component: TripleLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "medium",
    color: "primary",
    spacing: "medium",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    color: {
      control: "select",
      options: ["primary", "dark"],
    },
    spacing: {
      control: "select",
      options: ["small", "medium"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TripleLine>;

export const Primary: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
};

export const Dark: Story = {
  args: {
    size: "medium",
    color: "dark",
  },
};

export const Light: Story = {
  args: {
    size: "medium",
    color: "light",
  },
  parameters: {
    backgrounds: {
      default: "primary",
    },
  }
};

export const PrimarySmall: Story = {
  args: {
    size: "small",
    color: "primary",
  },
};

export const DarkSmall: Story = {
  args: {
    size: "small",
    color: "dark",
  },
};
