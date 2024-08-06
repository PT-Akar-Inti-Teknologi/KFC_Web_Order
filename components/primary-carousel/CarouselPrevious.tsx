import React from "react";
import ChevronRightIcon from "../icons/icon-collections/header-icons/ChevronRightIcon";
import { CarouselPrevious as ShadcnCarouselPrevious } from "../ui/carousel";

function CarouselPrevious() {
  return (
    <ShadcnCarouselPrevious className="w-12 h-12 hidden md:block bg-transparent group border-none hover:bg-transparent absolute top-1/2 lg:left-[44px] xl:left-[88px] -translate-y-1/2">
      <div className="w-12 h-12 rounded-full bg-[#414349]/40 flex items-center justify-center backdrop-blur-sm">
        <ChevronRightIcon className="w-8 h-8 rotate-180 text-white/40 duration-300 group-hover:text-white" />
      </div>
    </ShadcnCarouselPrevious>
  );
}

export default CarouselPrevious;
