import React from "react";
import Image from "next/image";
import ClaimNowButton from "../button/ClaimNowButton";
import { SpecialOfferCardProps } from "./SpecialOffers.types";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function SpecialOfferCard({
  id,
  title,
  description,
  src,
  onClaim,
  className,
  promo_code,
  tPromoCode,
  tClaimButton,
  ...props
}: Readonly<SpecialOfferCardProps>) {
  const t = useTranslations("Actions");
  const promoCodeLabel = tPromoCode ?? t("promoCode");
  return (
    <div
      className={cn([
        "w-[200px] h-[233px] lg:w-[272px] lg:h-[300px] rounded-2xl bg-white custom-shadow-1 flex flex-col",
        className,
      ])}
      {...props}
    >
      <Image
        src={src}
        alt={title}
        width={272}
        height={153}
        className="w-full h-auto aspect-[272/153] rounded-xl overflow-hidden"
      />
      <div className="px-3 py-3 lg:px-5 lg:py-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-sm lg:text-lg font-bold line-clamp-1">{title}</h3>
          <p className="text-xs lg:text-base text-neutral-500 line-clamp-2">
            {description}
          </p>
        </div>

        {promo_code ? (
          <p className="text-xs lg:text-sm text-neutral-500">
            {promoCodeLabel} <span className="mx-1">:</span>
            <strong className="text-primary-500 font-bold">{promo_code}</strong>
            </p>
        ) : (
          <ClaimNowButton title={tClaimButton} onClick={() => onClaim(id)} />
        )}
      </div>
    </div>
  );
}

export default SpecialOfferCard;
