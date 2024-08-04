import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function MenuIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}  
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <path
        d="M4 17H20M4 12H20M4 7H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
