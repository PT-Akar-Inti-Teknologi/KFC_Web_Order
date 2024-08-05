import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import DineInIcon from "./icon-collections/order-type-icons/DineInIcon";
import TakeAwayIcon from "./icon-collections/order-type-icons/DriveThruIcon";
import DeliveryIcon from "./icon-collections/order-type-icons/DeliveryIcon";
import DriveThruIcon from "./icon-collections/order-type-icons/TakeAwayIcon";
import CateringIcon from "./icon-collections/order-type-icons/CateringIcon";
import BirthDayPartyIcon from "./icon-collections/order-type-icons/BirthDayPartyIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/OrderType",
  tags: ["autodocs"],
 
};

export default meta;

type Story = StoryObj<IconProps>;

export const DineIn: Story = {
  render: (args) => <DineInIcon {...args} />,
};

export const TakeAway: Story = {
  render: (args) => <TakeAwayIcon {...args} />,
};

export const Delivery: Story = {
  render: (args) => <DeliveryIcon {...args} />,
};

export const DriveThru: Story = {
  render: (args) => <DriveThruIcon {...args} />,
};

export const Catering: Story = {
  render: (args) => <CateringIcon {...args} />,
};

export const BirthDayParty: Story = {
  render: (args) => <BirthDayPartyIcon {...args} />,
};

