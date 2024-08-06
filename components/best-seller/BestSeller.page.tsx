"use client";

import React, { useState } from "react";
import Container from "../container/Container";
import TripleLine from "../triple-line/TripleLine";
import SectionTitle from "../typography/SectionTitle";
import { useTranslations } from "next-intl";
import SeeAllButton from "../button/SeeAllButton";
import { bestSellerData } from "./BestSeller.utils";
import { BestSellerModel } from "./BestSeller.types";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../CarouselArrowButton/CarouselArrowButton";

import { CarouselApi } from "../ui/carousel";
import {
  CarouselDotButton,
  useCarouselDotButton,
} from "../CarouselDotButton/CarouselDotButton";
import BestSellerCarousel from "./BestSeller.carousel";

type BestSellerSectionProps = {
  title?: string;
  data?: BestSellerModel[];
  seeAllLabel?: string;
};

function BestSellerSection({
  title,
  seeAllLabel,
  data,
}: Readonly<BestSellerSectionProps>) {
  const t = useTranslations("BestSellerSection");
  title = title ?? t("title");
  data = data ?? bestSellerData;

  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onCarouselDotButtonClick } =
    useCarouselDotButton(api);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(api);

  return (
    <section className="bg-white pt-6 lg:pt-12 pb-6 lg:pb-16 overflow-hidden">
      <Container>
        <TripleLine
          color="primary"
          spacing={"medium"}
          className="mb-1 lg:mb-5"
        />
        <div className="flex items-center justify-between mb-4 lg:mb-10 space-x-8">
          <div className="flex items-center space-x-8 flex-1 justify-between lg:justify-start">
            <SectionTitle className="mt-2">{title}</SectionTitle>
            <SeeAllButton title={seeAllLabel} />
          </div>

          <div className="hidden lg:flex space-x-2">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <BestSellerCarousel
          data={data}
          setApi={setApi}
          opts={{ align: "start", dragFree: true }}
        />

        <div className="hidden lg:flex justify-center">
          <div className="flex space-x-2">
            {scrollSnaps.map((_, index) => (
              <CarouselDotButton
                key={index}
                onClick={() => onCarouselDotButtonClick(index)}
                isActive={selectedIndex === index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BestSellerSection;
