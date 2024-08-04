"use client"

import AppBanner from "@/components/app-banner/AppBanner";
import Header from "@/components/header/Header";
import { useTranslations } from "next-intl";
import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
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
      <Header/>
      {children}
    </main>
  );
}
