import { cn } from "@/lib/utils";
import React, { HTMLAttributes, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(["container mx-auto px-4", className])}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
