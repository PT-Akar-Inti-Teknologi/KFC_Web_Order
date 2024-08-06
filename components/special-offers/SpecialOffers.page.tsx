"use client";

import React, { useState } from "react";
import Container from "../container/Container";
import TripleLine from "../triple-line/TripleLine";
import SectionTitle from "../typography/SectionTitle";
import { useTranslations } from "next-intl";
import SeeAllButton from "../button/SeeAllButton";
import { specialOffersData } from "./SpecialOffers.utils";
import { SpecialOfferModel } from "./SpecialOffers.types";
import SpecialOffersCarousel from "./SpecialOffers.carousel";
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

type SpecialOffersSectionProps = {
  title?: string;
  data?: SpecialOfferModel[];
  seeAllLabel?: string;
};

function SpecialOffersSection({
  title,
  seeAllLabel,
  data,
}: Readonly<SpecialOffersSectionProps>) {
  const t = useTranslations("SpecialOffersSection");
  title = title ?? t("title");
  data = data ?? specialOffersData;

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
    <section className="bg-primary-gradient pt-6 lg:pt-12 pb-6 lg:pb-16 overflow-hidden">
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

        <SpecialOffersCarousel
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

export default SpecialOffersSection;
