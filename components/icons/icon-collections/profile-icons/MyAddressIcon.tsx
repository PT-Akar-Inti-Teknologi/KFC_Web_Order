import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function MyAddressIcon(props: IconProps) {
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
        d="M10.6799 17.1731C14.0424 15.4585 16.6667 12.619 16.6667 9.16667C16.6667 5.48477 13.6819 2.5 10 2.5C6.3181 2.5 3.33334 5.48477 3.33334 9.16667C3.33334 12.619 5.95757 15.4585 9.32012 17.1731C9.74733 17.3909 10.2527 17.3909 10.6799 17.1731Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9.16667C12.5 10.5474 11.3807 11.6667 10 11.6667C8.61929 11.6667 7.5 10.5474 7.5 9.16667C7.5 7.78595 8.61929 6.66667 10 6.66667C11.3807 6.66667 12.5 7.78595 12.5 9.16667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
