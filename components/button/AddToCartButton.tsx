import React, { HTMLAttributes } from "react";
import { useTranslations } from "next-intl";
import Button from "./Button";
type AddToCartButtonProps = HTMLAttributes<HTMLButtonElement> & {
  title?: string;
};

function AddToCartButton({ title, ...props }: AddToCartButtonProps) {
  const t = useTranslations("Actions");

  if (!title) {
    title = t("addToCart");
  }

  return (
    <Button
      variant="primary"
      {...props}
    >
      {title}
    </Button>
  );
}

export default AddToCartButton;
