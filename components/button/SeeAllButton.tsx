import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import ArrowRightIcon from "../icons/icon-collections/common-icons/ArrowRightIcon";
import Link from "next/link";

type SeeAllButtonProps = ComponentProps<typeof Button> & {
  title?: string;
  href?: string;
};

function SeeAllButton({ title, href = "", ...props }: SeeAllButtonProps) {
  const t = useTranslations("Actions");

  if (!title) {
    title = t("seeAll");
  }

  return (
    <Button
      className={cn([
        "text-base font-bold text-neutral-700 bg-transparent border neutral-100 rounded-full px-4",
      ])}
      size={"lg"}
      asChild
      {...props}
    >
      <Link href={href}>
        {title} <ArrowRightIcon className="text-primary-500 ml-2" />
      </Link>
    </Button>
  );
}

export default SeeAllButton;
