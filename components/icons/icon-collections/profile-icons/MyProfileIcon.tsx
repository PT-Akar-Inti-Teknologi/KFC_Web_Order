import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function MyProfileIcon(props: IconProps) {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.9873 12.7885C6.76428 12.7885 4.0119 13.2758 4.0119 15.2273C4.0119 17.1789 6.74682 17.6837 9.9873 17.6837C13.2103 17.6837 15.9619 17.1956 15.9619 15.2448C15.9619 13.294 13.2278 12.7885 9.9873 12.7885Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.9873 10.0049C12.1024 10.0049 13.8167 8.28978 13.8167 6.1747C13.8167 4.05962 12.1024 2.34534 9.9873 2.34534C7.87222 2.34534 6.15714 4.05962 6.15714 6.1747C6.15 8.28264 7.85317 9.99772 9.96032 10.0049H9.9873Z"
        stroke="currentColor"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
