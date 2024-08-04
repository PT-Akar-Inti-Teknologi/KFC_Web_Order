import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function FAQIcon(props: IconProps) {
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
        d="M10 14.1667V14.1607M9.99999 12.381C9.99999 9.70238 12.5 10.2976 12.5 8.21429C12.5 6.89932 11.3807 5.83333 9.99999 5.83333C8.88058 5.83333 7.93301 6.53402 7.61444 7.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
