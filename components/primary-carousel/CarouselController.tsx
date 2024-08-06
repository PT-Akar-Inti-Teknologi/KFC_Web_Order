import React from "react";
import { PrimaryBannerModel } from "./PrimaryCarousel.types";
import { cn } from "@/lib/utils";

type CarouselControllerProps = {
  data?: PrimaryBannerModel[];
  current: number;
  onClick: (index: number) => void;
};

function CarouselController({
  data,
  current,
  onClick,
}: Readonly<CarouselControllerProps>) {
  return (
    <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex space-x-2">
      {data?.map((item, index) => (
        <button
          key={item.title}
          onClick={() => onClick(index)}
          className={cn([
            "duration-300",
            "w-6 h-2 bg-none border border-neutral-200 rounded",
            index === current - 1 && " bg-white border-white",
          ])}
        />
      ))}
    </div>
  );
}

export default CarouselController;
