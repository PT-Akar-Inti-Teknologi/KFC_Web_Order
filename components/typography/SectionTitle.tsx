import { cn } from "@/lib/utils";
import React, { HTMLAttributes, PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-national2condensed font-bold text-neutral-900 uppercase",
        "text-[28px] leading-[30px]",
        "lg:text-5xl lg:leading-[52px]",
        "whitespace-pre-wrap",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
