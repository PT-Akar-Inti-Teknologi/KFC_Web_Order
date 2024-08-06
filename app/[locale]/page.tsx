import PrimaryCarousel from "@/components/primary-carousel/PrimaryCarousel";
import { primaryCarouselData } from "@/components/primary-carousel/PrimaryCarousel.utils";
import OrderTypeSection from "@/components/order-type-section/OrderTypeSection";
import SpecialOffersSection from "@/components/special-offers/SpecialOffers.page";

export default function Home() {
  return (
    <div>
      <PrimaryCarousel data={primaryCarouselData} />
      <OrderTypeSection />
      <SpecialOffersSection />
    </div>
  );
}
