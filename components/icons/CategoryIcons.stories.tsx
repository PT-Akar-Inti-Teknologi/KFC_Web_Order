import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import SpecialIcon from "./icon-collections/category-icons/SpecialIcon";
import BreakfastIcon from "./icon-collections/category-icons/BreakfastIcon";
import ComboIcon from "./icon-collections/category-icons/Combolcon";
import AlacarteIcon from "./icon-collections/category-icons/AlacarteIcon";
import DrinksIcon from "./icon-collections/category-icons/DrinksIcon";
import KidsMealIcon from "./icon-collections/category-icons/KidsMealIcon";
import OthersIcon from "./icon-collections/category-icons/OthersIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/Category",
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

export const Special: Story = {
  render: (props) => <SpecialIcon {...props} />,
};

export const Breakfast: Story = {
  render: (props) => <BreakfastIcon {...props} />,
};

export const Combo: Story = {
  render: (props) => <ComboIcon{...props} />,
};

export const Alacarte: Story = {
  render: (props) => <AlacarteIcon {...props} />,
};

export const Drinks: Story = {
  render: (props) => <DrinksIcon {...props} />,
};

export const KidsMeal: Story = {
  render: (props) => <KidsMealIcon {...props} />,
};

export const Others: Story = {
  render: (props) => <OthersIcon {...props} />,
};

