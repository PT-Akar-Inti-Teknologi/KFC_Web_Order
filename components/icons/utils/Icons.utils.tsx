import ChevronDownIcon from "../icon-collections/header-icons/ChevronDownIcon";
import CouponIcon from "../icon-collections/profile-icons/CouponIcon";
import CustomerServiceIcon from "../icon-collections/profile-icons/CustomerServiceIcon";
import FAQIcon from "../icon-collections/profile-icons/FAQIcon";
import LocationIcon from "../icon-collections/header-icons/LocationIcon";
import MenuIcon from "../icon-collections/header-icons/MenuIcon";
import MyAddressIcon from "../icon-collections/profile-icons/MyAddressIcon";
import MyOrderIcon from "../icon-collections/profile-icons/MyOrderIcon";
import MyPaymentIcon from "../icon-collections/profile-icons/MyPaymentIcon";
import MyProfileIcon from "../icon-collections/profile-icons/MyProfileIcon";
import MyVoucherIcon from "../icon-collections/profile-icons/MyVoucherIcon";
import PrivacyPolicyIcon from "../icon-collections/profile-icons/PrivacyPolicyIcon";
import SignOutIcon from "../icon-collections/profile-icons/SignOutIcon";
import TermsAndConditionIcon from "../icon-collections/profile-icons/TermsAndConditionIcon";
import { IconListItem } from "../models/Icon.types";

export const navbarIconList: IconListItem[] = [
  {
    Component: <MenuIcon />,
    title: "Menu",
  },
  {
    Component: <LocationIcon />,
    title: "Location",
  },
  {
    Component: <CouponIcon />,
    title: "Coupon",
  },
  {
    Component: <ChevronDownIcon />,
    title: "Chevron Down",
  },
];

export const profileIconList: IconListItem[] = [
  {
    Component: <MyProfileIcon />,
    title: "My Profile",
  },
  {
    Component: <MyOrderIcon />,
    title: "My Order",
  },
  {
    Component: <MyPaymentIcon />,
    title: "My Payment",
  },
  {
    Component: <MyVoucherIcon />,
    title: "My Voucher",
  },
  {
    Component: <MyAddressIcon />,
    title: "My Address",
  },
  {
    Component: <PrivacyPolicyIcon />,
    title: "Privacy Policy",
  },
  {
    Component: <TermsAndConditionIcon />,
    title: "Terms & Condition",
  },
  {
    Component: <CustomerServiceIcon />,
    title: "Customer Service",
  },
  {
    Component: <FAQIcon />,
    title: "FAQ",
  },
  {
    Component: <SignOutIcon />,
    title: "Sign Out",
  },
];

export const iconList: IconListItem[] = [
  ...navbarIconList,
  ...profileIconList,
]
