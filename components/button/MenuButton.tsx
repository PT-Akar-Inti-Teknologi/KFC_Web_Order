import React from "react";
import Button, { ButtonProps } from "./Button";
import MenuIcon from "../icons/icon-collections/header-icons/MenuIcon";

type MenuButtonProps = ButtonProps;

function MenuButton(props: MenuButtonProps) {
  return (
    <Button variant="secondary" className="p-2 flex items-center justify-center" size="icon"  {...props}>
      <MenuIcon className="w-10 h-10" />
    </Button>
  );
}

export default MenuButton;
