import React, { ButtonHTMLAttributes } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type SizeVariant = "default" | "sm" | "lg" | "icon";

const sizeVariant = {
  default: "h-10 px-4 py-2",
  sm: "h-9  px-3",
  lg: "h-12  px-8",
  icon: "h-10 w-10  md:h-12 md:w-12",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: SizeVariant;
};
function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  switch (variant) {
    case "primary":
      return (
        <ShadcnButton
          variant="default"
          className={cn(
            "bg-primary-500 text-white rounded-full hover:bg-primary-600",
            sizeVariant[size],
            className
          )}
          {...props}
        />
      );
    case "secondary":
      return (
        <ShadcnButton
          className={cn(
            "border-white/20 bg-transparent text-white border hover:border-white  rounded-full",
            sizeVariant[size],
            className
          )}
          {...props}
        />
      );
    case "ghost":
      return (
        <ShadcnButton
          variant={"ghost"}
          className={cn(
            " bg-transparent text-white hover:text-white hover:bg-transparent",
            sizeVariant[size],
            className
          )}
          {...props}
        />
      );

    default:
      return <ShadcnButton>Button</ShadcnButton>;
  }
}

export default Button;
