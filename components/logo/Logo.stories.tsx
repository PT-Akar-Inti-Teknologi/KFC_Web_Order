import { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;
export const Primary: Story = {
  args: {
    variant: "primary",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (props) => <Logo {...props} />,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (props) => <Logo {...props} />,
};
