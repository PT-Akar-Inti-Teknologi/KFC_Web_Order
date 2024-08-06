import React from "react";
import { Button } from "../ui/button";
import ChevronRightIcon from "../icons/icon-collections/header-icons/ChevronRightIcon";
import { CarouselNext as ShadcnCarouselNext } from "../ui/carousel";

function CarouselNext() {
  return (
    <ShadcnCarouselNext className="hidden md:block w-12 h-12 bg-transparent group  border-none hover:bg-transparent absolute top-1/2  lg:right-[44px] xl:right-[88px] -translate-y-1/2">
      <div className="w-12 h-12 rounded-full bg-[#414349]/40 flex items-center justify-center backdrop-blur-sm">
        <ChevronRightIcon className="w-8 h-8 text-white/40 duration-300 group-hover:text-white" />
      </div>
    </ShadcnCarouselNext>
  );
}

export default CarouselNext;
