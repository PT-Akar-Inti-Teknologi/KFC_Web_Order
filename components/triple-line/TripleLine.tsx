import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cvaStyle = cva("", {
  variants: {
    size: {
      small: ["w-[5px] h-[14px]"],
      medium: ["w-3 h-[34px]"],
    },
    color: {
      primary: "bg-primary-500",
      dark: "bg-neutral-900",
    },
    spacing: {
      small: "space-x-1",
      medium: "space-x-2.5",
    },
  },
});

type TripleLineProps = Readonly<
  HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cvaStyle> & {
      itemClassName?: string;
    }
>;
export default function TripleLine({
  className,
  itemClassName,
  size,
  color,
  spacing,
  ...props
}: TripleLineProps) {
  const container = cvaStyle({ spacing });
  const item = cvaStyle({ size, color, className: itemClassName });

  return (
    <div className={cn(["flex", container])} {...props}>
      <div className={item} />
      <div className={item} />
      <div className={item} />
    </div>
  );
}
