import PrimaryCarousel from "@/components/primary-carousel/PrimaryCarousel";
import { primaryCarouselData } from "@/components/primary-carousel/PrimaryCarousel.utils";
import OrderTypeSection from "@/components/order-type/OrderType.page";
import SpecialOffersSection from "@/components/special-offers/SpecialOffers.page";
import BestSellerSection from "@/components/best-seller/BestSeller.page";

export default function Home() {
  return (
    <div>
      <PrimaryCarousel data={primaryCarouselData} />
      <OrderTypeSection />
      <SpecialOffersSection />
      <BestSellerSection />
    </div>
  );
}
