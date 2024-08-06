import BirthDayPartyIcon from "../icons/icon-collections/order-type-icons/BirthDayPartyIcon";
import CateringIcon from "../icons/icon-collections/order-type-icons/CateringIcon";
import DineInIcon from "../icons/icon-collections/order-type-icons/DineInIcon";
import TakeAwayIcon from "../icons/icon-collections/order-type-icons/DriveThruIcon";
import DriveThruIcon from "../icons/icon-collections/order-type-icons/TakeAwayIcon";
import { OrderTypeModel } from "./OrderType.model";

export const orderTypeData: OrderTypeModel[] = [
  {
    title: "Dine-in",
    icon: <DineInIcon />,
    to: "/",
  },
  {
    title: "Take Away",
    icon: <TakeAwayIcon />,
    to: "/",
  },
  {
    title: "Delivery",
    icon: <TakeAwayIcon />,
    to: "/",
  },
  {
    title: "Drive-Thru",
    icon: <DriveThruIcon />,
    to: "/",
  },
  {
    title: "Catering",
    icon: <CateringIcon />,
    to: "/",
  },
  {
    title: "B'day Party",
    icon: <BirthDayPartyIcon />,
    to: "/",
  }
]