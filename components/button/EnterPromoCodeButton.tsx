import React from "react";
import Button, { ButtonProps } from "./Button";
import CouponIcon from "../icons/icon-collections/profile-icons/CouponIcon";
import { useTranslations } from "next-intl";

type EnterPromoCodeButtonProps = ButtonProps & {
  title?: string;
};

function EnterPromoCodeButton({ title, ...props }: EnterPromoCodeButtonProps) {
  const t = useTranslations("EnterPromoCode");
  return (
    <Button variant="secondary" className="gap-2" {...props}>
      <CouponIcon />
      {title ?? t("title")}
    </Button>
  );
}

export default EnterPromoCodeButton;
