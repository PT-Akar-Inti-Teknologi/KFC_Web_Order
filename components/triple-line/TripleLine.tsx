import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cvaStyle = cva("", {
  variants: {
    size: {
      small: ["w-[5px] h-[14px]"],
      medium: [
        "w-[5px] h-[14px]",
        "md:w-3 md:h-[34px]"
      ],
    },
    color: {
      primary: "bg-primary-500",
      dark: "bg-neutral-900",
    },
    spacing: {
      small: "",
      medium: "",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
    spacing: "medium",
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
  const item = cvaStyle({ size, color, className: itemClassName });

  return (
    <div
      className={cn([
        "flex",
        spacing === "small" && "space-x-1",
        spacing === "medium" && "space-x-1 md:space-x-2.5",
        className,
      ])}
      {...props}
    >
      <div className={item} />
      <div className={item} />
      <div className={item} />
    </div>
  );
}
