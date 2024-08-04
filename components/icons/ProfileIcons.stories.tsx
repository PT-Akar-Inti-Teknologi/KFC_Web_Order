import { Meta, StoryObj } from "@storybook/react";
import { IconProps } from "./models/Icon.types";
import CustomerServiceIcon from "./icon-collections/profile-icons/CustomerServiceIcon";
import FAQIcon from "./icon-collections/profile-icons/FAQIcon";
import MyAddressIcon from "./icon-collections/profile-icons/MyAddressIcon";
import MyOrderIcon from "./icon-collections/profile-icons/MyOrderIcon";
import MyPaymentIcon from "./icon-collections/profile-icons/MyPaymentIcon";
import MyProfileIcon from "./icon-collections/profile-icons/MyProfileIcon";
import MyVoucherIcon from "./icon-collections/profile-icons/MyVoucherIcon";
import PrivacyPolicyIcon from "./icon-collections/profile-icons/PrivacyPolicyIcon";
import SignOutIcon from "./icon-collections/profile-icons/SignOutIcon";
import TermsAndConditionIcon from "./icon-collections/profile-icons/TermsAndConditionIcon";

const meta: Meta<IconProps> = {
  title: "Atoms/Icons/Profile",
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

export const MyProfile: Story = {
  render: (props) => <MyProfileIcon {...props} />,
};

export const MyOrder: Story = {
  render: (props) => <MyOrderIcon {...props} />,
};

export const MyPayment: Story = {
  render: (props) => <MyPaymentIcon {...props} />,
};

export const MyVoucher: Story = {
  render: (props) => <MyVoucherIcon {...props} />,
};

export const MyAddress: Story = {
  render: (props) => <MyAddressIcon {...props} />,
};
export const PrivacyPolicy: Story = {
  render: (props) => <PrivacyPolicyIcon {...props} />,
};
export const TermsAndCondition: Story = {
  render: (props) => <TermsAndConditionIcon {...props} />,
};

export const CustomerService: Story = {
  render: (props) => <CustomerServiceIcon {...props} />,
};
export const FAQ: Story = {
  render: (props) => <FAQIcon {...props} />,
};

export const SignOut: Story = {
  render: (props) => <SignOutIcon {...props} />,
};
