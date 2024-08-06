"use client";

import React, { ComponentProps } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { BestSellerModel } from "./BestSeller.types";
import BestSellerCard from "./BestSeller.card";

export type BestSellerCarouselProps = ComponentProps<typeof Carousel> & {
  data?: BestSellerModel[];
};

function BestSellerCarousel({
  data,
  ...props
}: Readonly<BestSellerCarouselProps>) {
  return (
    <Carousel {...props} className="-mx-6 xl:mx-0">
      <CarouselContent className="-ml-6 mb-5 pl-6 mr-6 xl:pl-0">
        {data?.map((item) => (
          <CarouselItem
            key={item.title}
            className="pl-6 basis-[60%] min-w-[200px] md:basis-[30%] xl:basis-[28%] xl:min-w-[272px]"
          >
            <BestSellerCard
              {...item}
              onAddToCart={() => console.log(`Menu ${item.title} added to cart`)}
              className="mb-5"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default BestSellerCarousel;
