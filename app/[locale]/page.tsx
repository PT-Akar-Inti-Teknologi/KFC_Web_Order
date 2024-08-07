"use client";

import PrimaryCarousel from "@/components/primary-carousel/PrimaryCarousel";
import { primaryCarouselData } from "@/components/primary-carousel/PrimaryCarousel.utils";
import OrderTypeSection from "@/components/order-type/OrderType.page";
import SpecialOffersSection from "@/components/special-offers/SpecialOffers.page";
import BestSellerSection from "@/components/best-seller/BestSeller.page";
import UnlockBanner from "@/components/unlock-banner/UnlockBanner";
import { NewMemberDialog } from "@/components/dialog/new-member-dialog/NewMemberDialog";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <PrimaryCarousel data={primaryCarouselData} />
      <OrderTypeSection />
      <SpecialOffersSection />
      <BestSellerSection />
      <UnlockBanner />
      <NewMemberDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
