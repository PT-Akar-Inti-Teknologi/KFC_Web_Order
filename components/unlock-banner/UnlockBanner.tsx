import React from "react";
import TripleLine from "../triple-line/TripleLine";
import { useTranslations } from "next-intl";
import Container from "../container/Container";
import SectionTitle from "../typography/SectionTitle";
import Link from "next/link";
import PlayStoreIcon from "../icons/icon-collections/common-icons/PlayStoreIcon";
import AppStoreIcon from "../icons/icon-collections/common-icons/AppStoreIcon";

type UnlockBannerProps = {
  title?: string;
  description?: string;
};
function UnlockBanner({ title, description }: Readonly<UnlockBannerProps>) {
  const t = useTranslations("UnlockBanner");
  title = title ?? t("title");
  description = description ?? t("description");

  return (
    <section className="bg-primary min-h-[448px] md:min-h-[392px]">
      <Container>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="flex space-x-2 mb-8">
              <div className="w-2 h-6 lg:w-3 lg:h-[34px] bg-white"></div>
              <div className="w-2 h-6 lg:w-3 lg:h-[34px] bg-white"></div>
              <div className="w-2 h-6 lg:w-3 lg:h-[34px] bg-white"></div>
            </div>
            <SectionTitle className="text-white mb-6">{title}</SectionTitle>
            <p className="text-white text-lg md:text-xl font-normal">{description}</p>

            <div className="flex space-x-3 mt-8 md:mt-12">
              <Link href={"/play-store"}>
                <PlayStoreIcon/>
              </Link>

              <Link href={"/app-store"}>
                <AppStoreIcon/>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UnlockBanner;
