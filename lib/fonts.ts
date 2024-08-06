
// setup fonts
import localFont from "next/font/local";
import { Lato } from "next/font/google";

export const lato = Lato({
    weight: ["100", "300", "400", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lato",
  });
  
 export const national2condensed = localFont({
    src: [
      {
        path: "../public/fonts/National2Condensed/National2Condensed-Regular.otf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../public/fonts/National2Condensed/National2Condensed-Medium.otf",
        weight: "500",
        style: "normal",
      },
      {
        path: "../public/fonts/National2Condensed/National2Condensed-Bold.otf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../public/fonts/National2Condensed/National2Condensed-BoldItalic.otf",
        weight: "700",
        style: "italic",
      },
    ],
    variable: "--font-national2condensed",
  });