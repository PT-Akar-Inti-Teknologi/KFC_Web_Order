import CloseButton from "@/components/button/CloseButton";
import MenuButton from "@/components/button/MenuButton";
import React, { HTMLAttributes } from "react";

export type ToggleMenuButtonProps = HTMLAttributes<HTMLButtonElement> & {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
};

function ToggleMenuButton(props: ToggleMenuButtonProps) {
  if (props.open) return <CloseButton onClick={props.onClose} />;
  return <MenuButton onClick={props.onOpen} />;
}

export default ToggleMenuButton;
