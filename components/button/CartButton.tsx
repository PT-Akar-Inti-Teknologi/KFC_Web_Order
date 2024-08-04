import React from "react";
import Button, { ButtonProps } from "./Button";
import CartIcon from "../icons/icon-collections/header-icons/CartIcon";

type CartButtonProps = ButtonProps;

function CartButton(props: CartButtonProps) {
  return (
    <Button variant="secondary" className="p-2 flex items-center justify-center" size="icon"  {...props}>
      <CartIcon className="w-10 h-10" />
    </Button>
  );
}

export default CartButton;
