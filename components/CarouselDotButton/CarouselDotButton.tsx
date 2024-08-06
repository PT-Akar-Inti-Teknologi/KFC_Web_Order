import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { cn } from "@/lib/utils";

type UseCarouselDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onCarouselDotButtonClick: (index: number) => void;
};

export const useCarouselDotButton = (
  api: EmblaCarouselType | undefined
): UseCarouselDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onCarouselDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [api, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onCarouselDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button"> & {
  isActive?: boolean;
  variant?: "dark" | "light";
};

const carouselDotButtonStyle: Record<string, string> = {
  dark: "bg-neutral-900 border-neutral-900",
  light: "bg-white border-white",
};

export const CarouselDotButton: React.FC<PropType> = (props) => {
  const { children, isActive = false, variant = "dark", ...restProps } = props;

  return (
    <button
      type="button"
      className={cn([
        "duration-300",
        "w-6 h-2 bg-none border border-neutral-200 rounded",
        isActive && carouselDotButtonStyle[variant],
      ])}
      {...restProps}
    >
      {children}
    </button>
  );
};
