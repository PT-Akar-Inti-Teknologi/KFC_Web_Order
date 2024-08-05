import React from "react";
import Button, { ButtonProps } from "./Button";
import CloseIcon from "../icons/icon-collections/common-icons/CloseIcon";

type CloseButtonProps = ButtonProps;

function CloseButton(props: CloseButtonProps) {
  return (
    <Button variant="secondary" className="p-2 flex items-center justify-center" size="icon"  {...props}>
      <CloseIcon className="w-10 h-10" />
    </Button>
  );
}

export default CloseButton;
