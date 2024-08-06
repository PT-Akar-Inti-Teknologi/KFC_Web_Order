"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PrimaryCarouselModel } from "./PrimaryCarousel.types";
import Image from "next/image";
import CarouselPrevious from "./CarouselPrevious";
import CarouselNext from "./CarouselNext";
import CarouselController from "./CarouselController";
import { usePrimaryCarousel } from "./PrimaryCarousel.hook";

type PrimaryCarouselProps = {
  data?: PrimaryCarouselModel[];
};

export default function PrimaryCarousel({
  data,
}: Readonly<PrimaryCarouselProps>) {
  const state = usePrimaryCarousel();

  const renderCarouselItem = (item: PrimaryCarouselModel, index: number) => {
    return (
      <CarouselItem key={item.title} className="pl-0">
        <Image
          className="w-full h-auto aspect-[375/212] object-cover lg:aspect-[1440/468]"
          src={item.img}
          alt={item.title}
          width={1440}
          height={468}
        />
      </CarouselItem>
    );
  };

  return (
    <div className="overflow-hidden">
      <Carousel setApi={state.setApi} className="relative">
        <CarouselContent className="ml-0">
          {data?.map(renderCarouselItem)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselController
          data={data}
          current={state.current}
          onClick={(index) => state.api?.scrollTo(index)}
        />
      </Carousel>
    </div>
  );
}
