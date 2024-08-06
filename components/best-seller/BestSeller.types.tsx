import { HTMLAttributes } from "react";

export type BestSellerModel = {
  id: string;
  title: string;
  src: string;
  tAddToCart?: string;
  price?: number;
};

export type BestSellerCardProps = HTMLAttributes<HTMLDivElement> &
  BestSellerModel & {
    onAddToCart: (value: string) => void;
  };
