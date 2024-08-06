import React from "react";
import { IconProps } from "../../models/Icon.types";

export default function StartBadgeIcon(props: IconProps) {
  return (
    <svg
      width="46"
      height="60"
      viewBox="0 0 46 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 0V8H0L10 0Z" fill="#A71641" />
      <rect
        width="29.4"
        height="34"
        transform="translate(10.2998)"
        fill="white"
      />
      <rect x="10.2998" width="7" height="34" fill="#E4002B" />
      <rect x="21.5" width="7" height="34" fill="#E4002B" />
      <rect x="32.7002" width="7" height="34" fill="#E4002B" />
      <path
        d="M35.3571 42.2612C34.9038 42.7004 34.6956 43.3357 34.7988 43.9587L36.3546 52.5687C36.4858 53.2984 36.1778 54.0369 35.5671 54.4587C34.9686 54.8962 34.1723 54.9487 33.5196 54.5987L25.7688 50.5562C25.4993 50.4127 25.2001 50.3357 24.8938 50.3269H24.4196C24.2551 50.3514 24.0941 50.4039 23.9471 50.4844L16.1946 54.5462C15.8113 54.7387 15.3773 54.8069 14.9521 54.7387C13.9161 54.5427 13.2248 53.5557 13.3946 52.5144L14.9521 43.9044C15.0553 43.2762 14.8471 42.6374 14.3938 42.1912L8.07456 36.0662C7.54606 35.5534 7.36231 34.7834 7.60381 34.0887C7.83831 33.3957 8.43681 32.8899 9.15956 32.7762L17.8571 31.5144C18.5186 31.4462 19.0996 31.0437 19.3971 30.4487L23.2296 22.5912C23.3206 22.4162 23.4378 22.2552 23.5796 22.1187L23.7371 21.9962C23.8193 21.9052 23.9138 21.8299 24.0188 21.7687L24.2096 21.6987L24.5071 21.5762H25.2438C25.9018 21.6444 26.4811 22.0382 26.7838 22.6262L30.6671 30.4487C30.9471 31.0209 31.4913 31.4182 32.1196 31.5144L40.8171 32.7762C41.5521 32.8812 42.1663 33.3887 42.4096 34.0887C42.6388 34.7904 42.4411 35.5604 41.9021 36.0662L35.3571 42.2612Z"
        fill="#F5AF42"
        stroke="#FDDF9B"
        strokeWidth="2.1"
      />
    </svg>
  );
}