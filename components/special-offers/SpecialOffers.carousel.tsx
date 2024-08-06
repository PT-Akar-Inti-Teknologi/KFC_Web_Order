"use client";

import React, { ComponentProps } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { SpecialOfferModel } from "./SpecialOffers.types";
import SpecialOfferCard from "./SpecialOffers.card";

export type SpecialOffersCarouselProps = ComponentProps<typeof Carousel> & {
  data?: SpecialOfferModel[];
};

function SpecialOffersCarousel({
  data,
  ...props
}: Readonly<SpecialOffersCarouselProps>) {
  return (
    <Carousel {...props} className="-mx-6 xl:mx-0">
      <CarouselContent className="-ml-6 mb-5 pl-6 mr-6 xl:pl-0">
        {data?.map((item) => (
          <CarouselItem
            key={item.title}
            className="pl-6 basis-[60%] min-w-[200px] md:basis-[30%] xl:basis-[28%] xl:min-w-[272px]"
          >
            <SpecialOfferCard
              {...item}
              onClaim={() => console.log(`Voucher ${item.title} claimed`)}
              className="mb-5"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default SpecialOffersCarousel;
