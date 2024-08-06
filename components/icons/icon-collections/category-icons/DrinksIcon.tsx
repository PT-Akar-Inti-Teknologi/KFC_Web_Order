import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function DrinksIcon(props: IconProps) {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.6658 4.7879L17.4079 3.6359C17.4079 3.19018 15.0271 2.82812 12.0909 2.82812C9.15468 2.82812 6.77388 3.19155 6.77388 3.63727L6.51605 4.78721C6.02645 4.98195 5.74805 5.20412 5.74805 5.4407V6.32184C5.74805 7.07612 8.58828 7.68915 12.0909 7.68915C15.5935 7.68915 18.4338 7.07612 18.4338 6.32115V5.44001C18.4338 5.20344 18.1554 4.98058 17.6658 4.78652V4.7879Z"
        fill="#3A3C3F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95012 19.7463L6.55469 7.84706L6.55606 7.84774C7.36475 8.13887 8.4092 8.30792 9.4029 8.40529V11.9735H10.5V8.48811C10.9055 8.51033 11.2794 8.52222 11.5968 8.52817V11.9735H12.694V8.52826C13.0114 8.52235 13.3857 8.5105 13.7917 8.48827V11.9735H14.8889V8.40554C15.9834 8.2984 17.1399 8.10429 17.9753 7.75586L16.3433 19.7463C16.3433 20.4162 14.4644 20.96 12.1467 20.96C9.82897 20.96 7.95012 20.4162 7.95012 19.7463Z"
        fill="#E4002B"
      />
      <path
        d="M11.4629 4.42857L12.6384 1.68571L16.0342 1"
        stroke="#3A3C3F"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M22.8921 23.6292C22.8921 24.3867 17.98 25.0007 11.9206 25.0007C5.86129 25.0007 0.949219 24.3867 0.949219 23.6292C0.949219 22.8718 5.86129 22.2578 11.9206 22.2578C17.98 22.2578 22.8921 22.8718 22.8921 23.6292Z"
        fill="#808790"
      />
    </svg>
  );
}
