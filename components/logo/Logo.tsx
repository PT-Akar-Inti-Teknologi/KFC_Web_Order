import Image from "next/image";
import React, { ComponentProps } from "react";

type LogoVariant = "primary" | "secondary";
type LogoProps = Omit<ComponentProps<typeof Image>, "src" | "alt"> & {
  variant: LogoVariant;
};

const imageConfig = {
  primary: {
    src: '/images/logoPrimary.png',
    alt: "KFC",
    width: 121,
    height: 30,
  },
  secondary: {
    src: '/images/logoSecondary.png',
    alt: "KFC",
    width: 40,
    height: 40,
  },
};

function Logo(props: LogoProps) {
  const { variant, ...imageProps } = props;

  return (
    <Image
    priority
    src={imageConfig[variant].src}
    alt={imageConfig[variant].alt}
    width={imageConfig[variant].width}
    height={imageConfig[variant].height}
    className="w-auto h-auto"
      {...imageProps}
    />
  );
}

export default Logo;
