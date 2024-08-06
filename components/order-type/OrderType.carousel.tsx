"use client";

import React from "react";
import { OrderTypeModel } from "./OrderType.model";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import OrderTypeCard from "./OrderType.card";

export type OrderTypeCarouselProps = {
  data?: OrderTypeModel[];
};

function OrderTypeCarousel({ data }: Readonly<OrderTypeCarouselProps>) {
  const renderCarouselItem = (item: OrderTypeModel) => {
    return (
      <CarouselItem key={item.title} className="basis-1/4 min-w-[100px]">
        <OrderTypeCard {...item} variant="mobile" />
      </CarouselItem>
    );
  };

  return (
    <Carousel
      className="md:hidden"
      opts={{
        align: "start",
        dragFree: true,
      }}
    >
      <CarouselContent>{data?.map(renderCarouselItem)}</CarouselContent>
    </Carousel>
  );
}

export default OrderTypeCarousel;
