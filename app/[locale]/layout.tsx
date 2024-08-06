import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { getMessages } from "next-intl/server";
import { lato, national2condensed } from "@/lib/fonts";
import Providers from "../../providers/providers";
import "../globals.css";


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
