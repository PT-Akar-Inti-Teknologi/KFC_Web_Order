import BasicTier from "../icon-collections/tier-icons/BasicTierIcon";
import GoldTier from "../icon-collections/tier-icons/GoldTierIcon";
import PlatinumTier from "../icon-collections/tier-icons/PlatinumTierIcon";
import { TierListItem } from "../models/Tier.types";

export const tierList: TierListItem[] = [
    {
      Component: <BasicTier />,
      title: "Basic",
    },
    {
      Component: <GoldTier />,
      title: "Gold",
    },
    {
      Component: <PlatinumTier />,
      title: "Platinum",
    },
  ];

  export const ImageByTier = {
    "basic": <BasicTier/>,
    "gold": <GoldTier/>,
    "platinum": <PlatinumTier/>,
  }