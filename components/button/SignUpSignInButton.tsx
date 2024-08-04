import React from "react";
import Button, { ButtonProps } from "./Button";

type SignUpSignInButtonProps = ButtonProps;

function SignUpSignInButton({
  children,
  ...props
}: SignUpSignInButtonProps) {
  return (
    <Button variant="secondary" className="gap-2" {...props}>
      {children}
    </Button>
  );
}

export default SignUpSignInButton;
