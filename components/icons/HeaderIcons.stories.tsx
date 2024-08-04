import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import ChevronDownIcon from "./icon-collections/header-icons/ChevronDownIcon";
import ChevronRightIcon from "./icon-collections/header-icons/ChevronRightIcon";
import LocationIcon from "./icon-collections/header-icons/LocationIcon";
import MenuIcon from "./icon-collections/header-icons/MenuIcon";
import CartIcon from "./icon-collections/header-icons/CartIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/Header",
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
  },
};

export default meta;

type Story = StoryObj<IconProps>;

export const Menu: Story = {
  render: (props) => <MenuIcon {...props} />,
};

export const Cart: Story = {
  render: (props) => <CartIcon {...props} />,
};

export const Location: Story = {
  render: (props) => <LocationIcon {...props} />,
};

export const ChevronDown: Story = {
  render: (props) => <ChevronDownIcon {...props} />,
};
export const ChevronRight: Story = {
  render: (props) => <ChevronRightIcon {...props} />,
};
