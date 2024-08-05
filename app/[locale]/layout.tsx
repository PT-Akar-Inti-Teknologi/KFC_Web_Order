import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { getMessages } from "next-intl/server";

import Providers from "../../providers/providers";
import "../globals.css";

// setup fonts
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const national2condensed = localFont({
  src: [
    {
      path: "../../assets/fonts/National2Condensed/National2Condensed-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/National2Condensed/National2Condensed-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/National2Condensed/National2Condensed-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/National2Condensed/National2Condensed-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-national2condensed",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export const metadata: Metadata = {
  title: "KFC Web Order",
  description: "KFC di Indonesia, PT Fast Food Indonesia, Ayam Goreng",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const messages = await getMessages();
  
  return (
    <html lang={params.locale}>
      <body
        className={cn([
          national2condensed.variable,
          lato.variable,
          "font-lato",
          "bg-white",
        ])}
      >
        <Providers messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
