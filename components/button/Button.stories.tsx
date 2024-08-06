import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ComponentProps } from "react";
import EnterPromoCodeButton from "./EnterPromoCodeButton";
import SignUpSignInButton from "./SignUpSignInButton";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import CloseButton from "./CloseButton";
import SeeAllButton from "./SeeAllButton";

type StoryProps = ComponentProps<typeof Button> & {
  title: string;
};

const meta: Meta<StoryProps> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg", "icon"],
    },
  },
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
  args: {
    title: "My Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: ({ title, ...rest }) => <Button {...rest}>{title}</Button>,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: ({ title, ...rest }) => <Button {...rest}>{title}</Button>,
};

export const EnterPromoCode: Story = {
  args: {
    title: "Enter Promo Code",
  },
  argTypes: {
    title: {
      control: "text",
    },
  },
  parameters: {
    backgrounds: {
      default: "primary",
    },
  },
  render: ({ title }) => <EnterPromoCodeButton title={title} />,
};

export const SignUpSignIn: Story = {
  args: {
    title: "Sign up | Sign in",
  },
  argTypes: {
    title: {
      control: "text",
    },
  },
  parameters: {
    backgrounds: {
      default: "primary",
    },
  },
  render: ({ title }) => <SignUpSignInButton>{title}</SignUpSignInButton>,
};

export const Menu: Story = {
  parameters: {
    backgrounds: {
      default: "primary",
    },
  },
  render: (args) => <MenuButton />,
};

export const Cart: Story = {
  parameters: {
    backgrounds: {
      default: "primary",
    },
  },
  render: (args) => <CartButton />,
};

export const Close: Story = {
  parameters: {
    backgrounds: {
      default: "primary",
    },
  },
  render: (args) => <CloseButton />,
};

export const SeeAll: Story = {
  args: {
    title: "See All",
  },
  render: (args) => <SeeAllButton title={args.title} />,
};
