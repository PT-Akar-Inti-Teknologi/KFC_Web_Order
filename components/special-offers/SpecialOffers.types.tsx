import { HTMLAttributes } from "react";

export type SpecialOfferModel = {
  promo_code: string | null;
  id: string;
  title: string;
  description: string;
  src: string;
  tPromoCode?: string;
  tClaimButton?: string;
};

export type SpecialOfferCardProps = HTMLAttributes<HTMLDivElement> &
  SpecialOfferModel & {
    onClaim: (value: string) => void;
  };
