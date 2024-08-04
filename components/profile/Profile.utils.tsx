import CustomerServiceIcon from "../icons/icon-collections/profile-icons/CustomerServiceIcon";
import FAQIcon from "../icons/icon-collections/profile-icons/FAQIcon";
import MyAddressIcon from "../icons/icon-collections/profile-icons/MyAddressIcon";
import MyOrderIcon from "../icons/icon-collections/profile-icons/MyOrderIcon";
import MyPaymentIcon from "../icons/icon-collections/profile-icons/MyPaymentIcon";
import MyProfileIcon from "../icons/icon-collections/profile-icons/MyProfileIcon";
import MyVoucherIcon from "../icons/icon-collections/profile-icons/MyVoucherIcon";
import PrivacyPolicyIcon from "../icons/icon-collections/profile-icons/PrivacyPolicyIcon";
import SignOutIcon from "../icons/icon-collections/profile-icons/SignOutIcon";
import TermsAndConditionIcon from "../icons/icon-collections/profile-icons/TermsAndConditionIcon";
import { ProfileMenuListItem } from "./Profile.types";

export const profileMenuList: ProfileMenuListItem[] = [
  {
    title: "My Profile",
    link: "/profile",
    icon: <MyProfileIcon />,
  },
  {
    title: "My Order",
    link: "/profile/my-order",
    icon: <MyOrderIcon />,
  },
  {
    title: "My Payment",
    link: "/profile/my-payment",
    icon: <MyPaymentIcon />,
  },
  {
    title: "My Voucher",
    link: "/profile/my-voucher",
    icon: <MyVoucherIcon />,
  },
  {
    title: "My Address",
    link: "/profile/my-address",
    icon: <MyAddressIcon />,
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
    icon: <PrivacyPolicyIcon />,
  },
  {
    title: "Terms & Condition",
    link: "/terms-and-condition",
    icon: <TermsAndConditionIcon />,
  },
  {
    title: "Customer Service",
    link: "/customer-service",
    icon: <CustomerServiceIcon />,
  },
  {
    title: "FAQ",
    link: "/faq",
    icon: <FAQIcon />,
  },
  {
    title: "Sign Out",
    link: "/sign-out",
    icon: <SignOutIcon />,
  },
];
