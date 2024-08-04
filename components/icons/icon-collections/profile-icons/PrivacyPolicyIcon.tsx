import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function PrivacyPolicyIcon(props: IconProps) {
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
        d="M12.9167 7.91667L9.16667 11.6667L7.91667 10.4167M10 2.5L3.33334 5.83333C3.33334 10.161 5.65357 16.2582 10 17.5C14.3464 16.2582 16.6667 10.161 16.6667 5.83333L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
