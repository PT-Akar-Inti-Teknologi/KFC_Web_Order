import React from "react";
import Image from "next/image";
import AddToCartButton from "../button/AddToCartButton";
import { BestSellerCardProps } from "./BestSeller.types";
import { cn, formatNumberToRupiah } from "@/lib/utils";
import StartBadgeIcon from "../icons/icon-collections/best-seller/StarBadgeIcon";

function BestSellerCard({
  id,
  title,
  src,
  className,
  tAddToCart,
  onAddToCart,
  price = 0,
  ...props
}: Readonly<BestSellerCardProps>) {
  return (
    <div
      className={cn([
        "w-[196px] mt-1 px-4 py-5 lg:w-[274px] lg:h-[424px] rounded-2xl bg-white custom-shadow-1 flex flex-col",
        "relative",
        className,
      ])}
      {...props}
    >
      <StartBadgeIcon className="absolute left-6 -top-1" />
      <Image
        src={src}
        alt={title}
        width={242}
        height={242}
        className="w-full h-auto aspect-square rounded-xl overflow-hidden"
      />
      <div className=" flex flex-col flex-1">
        <div className="flex-1 mb-7">
          <h3 className="text-sm lg:text-lg line-clamp-1 mb-2">{title}</h3>
          <p className="font-bold text-neutral-900 text-2xl font-national2condensed">{formatNumberToRupiah(price)}</p>
        </div>

        <AddToCartButton title={tAddToCart} onClick={() => onAddToCart(id)} />
      </div>
    </div>
  );
}

export default BestSellerCard;
