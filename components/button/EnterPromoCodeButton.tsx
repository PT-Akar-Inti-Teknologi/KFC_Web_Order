import React from "react";
import Button, { ButtonProps } from "./Button";
import CouponIcon from "../icons/icon-collections/profile-icons/CouponIcon";

type EnterPromoCodeButtonProps = ButtonProps;

function EnterPromoCodeButton({
  children,
  ...props
}: EnterPromoCodeButtonProps) {
  return (
    <Button variant="secondary" className="gap-2" {...props}>
      <CouponIcon />
      {children}
    </Button>
  );
}

export default EnterPromoCodeButton;
