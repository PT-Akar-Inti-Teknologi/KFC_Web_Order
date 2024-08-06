import Link from "next/link";
import React from "react";
import { OrderTypeModel } from "./OrderType.model";
import { cn } from "@/lib/utils";

type OrderTypeCardProps = OrderTypeModel & {
  variant?: "mobile" | "desktop";
};

function DesktopVersion(props: Readonly<OrderTypeModel>) {
  return (
    <Link
      href={props.to}
      className={cn([
        "duration-300 group flex items-center flex-col justify-center w-[162px] h-[112px] rounded-xl bg-neutral-25 border-2 border-neutral-25",
        "hover:border-primary-400 hover:bg-primary-25",
      ])}
    >
      {props.icon}
      <span className="text-base mt-2 lg:mt-1 lg:text-xl font-normal duration-300 group-hover:text-primary-500 group-hover:font-bold">
        {props.title}
      </span>
    </Link>
  );
}

function MobileVersion(props: Readonly<OrderTypeModel>) {
  return (
    <Link href={props.to} className="flex group justify-center items-center flex-col">
      <div
        className={cn([
          "flex items-center flex-col justify-center",
          "w-full aspect-square rounded-xl bg-neutral-25",
          "mb-2 border-2 border-neutral-25 ",
          "hover:border-primary-400 hover:bg-primary-25",
        ])}
      >
        {props.icon}
      </div>
      <span className="text-sm font-normal group-hover:text-primary-500 group-hover:font-bold">{props.title}</span>
    </Link>
  );
}

export default function OrderTypeCard({
  variant = "desktop",
  ...props
}: OrderTypeCardProps) {
  if (variant === "mobile") return <MobileVersion {...props} />;
  return <DesktopVersion {...props} />;
}
