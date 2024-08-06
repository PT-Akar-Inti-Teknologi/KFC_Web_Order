import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 12.5L4 12.5M20 12.5L14 18.5M20 12.5L14 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
