import Image from "next/image";
import React, { ComponentProps } from "react";
import logoPrimary from "@/assets/images/logoPrimary.png";
import logoSecondary from "@/assets/images/logoSecondary.png";

type LogoVariant = "primary" | "secondary";
type LogoProps = Omit<ComponentProps<typeof Image>, "src" | "alt"> & {
  variant: LogoVariant;
};

const imageConfig = {
  primary: {
    src: logoPrimary,
    alt: "KFC",
    width: 121,
    height: 30,
  },
  secondary: {
    src: logoSecondary,
    alt: "KFC",
    width: 40,
    height: 40,
  },
};

function Logo(props: LogoProps) {
  const { variant, ...imageProps } = props;

  return (
    <Image
      {...imageProps}
      src={imageConfig[variant].src}
      alt={imageConfig[variant].alt}
      width={imageConfig[variant].width}
      height={imageConfig[variant].height}
    />
  );
}

export default Logo;
