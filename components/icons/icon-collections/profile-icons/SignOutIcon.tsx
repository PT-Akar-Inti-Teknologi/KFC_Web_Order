import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function SignOutIcon(props: IconProps) {
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
        d="M12.5133 6.1579V5.3804C12.5133 3.68457 11.1383 2.30957 9.4425 2.30957H5.38C3.685 2.30957 2.31 3.68457 2.31 5.3804V14.6554C2.31 16.3512 3.685 17.7262 5.38 17.7262H9.45083C11.1417 17.7262 12.5133 16.3554 12.5133 14.6646V13.8787"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1746 10.0179H8.14041"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7343 7.58862L18.1743 10.0178L15.7343 12.4478"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}