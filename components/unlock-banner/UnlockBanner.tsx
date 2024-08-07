import React from "react";
import { useTranslations } from "next-intl";
import Container from "../container/Container";
import SectionTitle from "../typography/SectionTitle";
import Link from "next/link";
import PlayStoreIcon from "../icons/icon-collections/common-icons/PlayStoreIcon";
import AppStoreIcon from "../icons/icon-collections/common-icons/AppStoreIcon";
import Image from "next/image";

type UnlockBannerProps = {
  title?: string;
  description?: string;
};
function UnlockBanner({ title, description }: Readonly<UnlockBannerProps>) {
  const t = useTranslations("UnlockBanner");
  title = title ?? t("title");
  description = description ?? t("description");

  return (
    <section className="bg-primary min-h-[448px] md:min-h-[392px] relative overflow-hidden">
      <Container className="relative z-20">
        <div className="grid md:grid-cols-2">
          <div>
            <div className="flex space-x-2 mb-8">
              <div className="w-2 h-6 lg:w-3 lg:h-[34px] bg-white"></div>
              <div className="w-2 h-6 lg:w-3 lg:h-[34px] bg-white"></div>
              <div className="w-2 h-6 lg:w-3 lg:h-[34px] bg-white"></div>
            </div>
            <SectionTitle className="text-white mb-6">{title}</SectionTitle>
            <p className="text-white text-lg md:text-xl font-normal">
              {description}
            </p>

            <div className="flex space-x-3 mt-8 md:mt-12">
              <Link href={"/play-store"}>
                <PlayStoreIcon />
              </Link>

              <Link href={"/app-store"}>
                <AppStoreIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="flex flex-col absolute top-[310px] md:top-[-350px] right-[120px] xl:top-[-780px] rotate-[20deg] xl:right-[200px] space-y-5 ">
        <Image
          src={"/images/phone-illustration-1.webp"}
          alt="KFC Illustration"
          width={445}
          height={906}
          className="hidden md:block md:w-[250px] lg:w-[445px]"
        />
        <Image
          src={"/images/phone-illustration-2.webp"}
          alt="KFC Illustration"
          width={445}
          height={906}
          className="w-[162px] md:w-[250px] lg:w-[445px]"
        />
      </div>

      <div className="absolute top-[260px] right-[-70px] md:top-[80px] md:right-[-80px] xl:top-[-230px] rotate-[20deg] xl:right-[-280px] flex flex-col space-y-5">
        <Image
          src={"/images/phone-illustration-1.webp"}
          alt="KFC Illustration"
          width={445}
          height={906}
          className="w-[162px] md:w-[200px] lg:hidden lg:w-[445px]"
        />
        <Image
          src={"/images/phone-illustration-2.webp"}
          alt="KFC Illustration"
          width={445}
          height={906}
          className="hidden lg:w-[445px] lg:block"
        />
      </div>
    </section>
  );
}

export default UnlockBanner;
