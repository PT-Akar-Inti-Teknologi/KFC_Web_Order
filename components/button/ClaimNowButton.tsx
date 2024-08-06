import React, { HTMLAttributes } from "react";
import { useTranslations } from "next-intl";
type ClaimNowButtonProps = HTMLAttributes<HTMLButtonElement> & {
  title?: string;
};

function ClaimNowButton({ title, ...props }: ClaimNowButtonProps) {
  const t = useTranslations("Actions");

  if (!title) {
    title = t("claimNow");
  }

  return (
    <button
      className="text-sm text-primary-500 p-0 font-bold h-6 inline-flex lg:text-base"
      {...props}
    >
      {title}
    </button>
  );
}

export default ClaimNowButton;
