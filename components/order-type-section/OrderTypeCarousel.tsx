"use client";

import React from "react";
import { OrderTypeModel } from "./OrderType.model";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type OrderTypeCarouselProps = {
  data?: OrderTypeModel[];
};

function OrderTypeCarousel({ data }: Readonly<OrderTypeCarouselProps>) {
  return (
    <Carousel
      className="md:hidden"
      opts={{
        align: "start",
        dragFree: true,
      }}
    >
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={item.title} className="basis-1/4 min-w-[100px]">
            <Link href={item.to} className="flex justify-center items-center flex-col">
              <div
                className={cn([
                  "flex items-center flex-col justify-center",
                  "w-full aspect-square rounded-xl bg-neutral-25",
                  "mb-2",
                ])}
              >
                {item.icon}
              </div>
              <span className="text-sm font-semibold">{item.title}</span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default OrderTypeCarousel;
