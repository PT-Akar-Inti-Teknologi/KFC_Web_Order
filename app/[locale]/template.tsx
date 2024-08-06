"use client";

import AppBanner from "@/components/app-banner/AppBanner";
import Footer from "@/components/footer/Footer";
import Menu from "@/components/menu/Menu";
import { useTranslations } from "next-intl";
import { PropsWithChildren } from "react";

export default function Template({ children }: Readonly<PropsWithChildren>) {
  const tAppBanner = useTranslations("AppBanner");
  return (
    <main>
      <AppBanner
        title={tAppBanner("title")}
        description={tAppBanner("description")}
        actionButton={tAppBanner("actionButton")}
        onActionButtonClick={() => {}}
        onCloseButtonClick={() => {}}
      />
      <Menu />
      {children}
      <Footer/>
    </main>
  );
}
