import React from "react";
import Container from "../container/Container";
import TripleLine from "../triple-line/TripleLine";
import SectionTitle from "../typography/SectionTitle";
import { useTranslations } from "next-intl";
import { OrderTypeModel } from "./OrderType.model";
import { orderTypeData } from "./OrderType.utils";
import Link from "next/link";
import { cn } from "@/lib/utils";
import OrderTypeCarousel from "./OrderTypeCarousel";

type OrderTypeSectionProps = {
  title?: string;
  data?: OrderTypeModel[];
};
function OrderTypeSection({ title, data }: Readonly<OrderTypeSectionProps>) {
  const t = useTranslations("OrderTypeSection");
  title = title ?? t("title");
  data = data ?? orderTypeData;

  const renderDesktopItem = (item: OrderTypeModel, index: number) => {
    return (
      <Link
        href={item.to}
        key={item.title}
        className={cn([
          "flex items-center flex-col justify-center w-[162px] h-[112px] rounded-xl bg-neutral-25",
        ])}
      >
        {item.icon}
        <span className="text-base mt-2 lg:mt-1 lg:text-xl font-semibold">
          {item.title}
        </span>
      </Link>
    );
  };

  return (
    <section className="pt-6 lg:pt-12 pb-6 lg:pb-16 overflow-hidden">
      <Container>
        <TripleLine
          color="primary"
          spacing={"medium"}
          className="mb-1 lg:mb-5"
        />
        <SectionTitle className="mb-4 lg:mb-10">{title}</SectionTitle>

        <div className="hidden md:flex space-x-5 items-center">
          {data.map(renderDesktopItem)}
        </div>

        <OrderTypeCarousel data={data} />
      </Container>
    </section>
  );
}

export default OrderTypeSection;
