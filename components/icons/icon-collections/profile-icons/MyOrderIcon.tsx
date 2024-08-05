import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function MyOrderIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 10.8334H10.8333M7.5 14.1667H12.5M10.8928 2.10776V5.69449C10.8928 6.61497 11.639 7.36116 12.5595 7.36116H16.1245M10.8928 2.10776C10.6089 2.09129 10.3115 2.08337 10 2.08337C5.22059 2.08337 3.75 3.94612 3.75 10C3.75 16.054 5.22059 17.9167 10 17.9167C14.7794 17.9167 16.25 16.054 16.25 10C16.25 9.01219 16.2108 8.13594 16.1245 7.36116M10.8928 2.10776L16.1245 7.36116"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
