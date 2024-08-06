import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import CloseIcon from "./icon-collections/common-icons/CloseIcon";
import ArrowRightIcon from "./icon-collections/common-icons/ArrowRightIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/Common",
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

export const Close: Story = {
  render: (props) => <CloseIcon {...props} />,
};

export const ArrowRight: Story = {
  render: (props) => <ArrowRightIcon {...props} />,
};
