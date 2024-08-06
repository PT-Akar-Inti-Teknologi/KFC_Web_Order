import { Meta, StoryObj } from "@storybook/react";
import SpecialOfferCard from "./SpecialOffers.card";
import { specialOffersData } from "./SpecialOffers.utils";


const meta: Meta<typeof SpecialOfferCard> = {
    title: "Molecules/Cards/SpecialOffer",
    component: SpecialOfferCard,
    tags: ["autodocs"],
    parameters: {
      layout: "centered"
    },
    args: {
      tClaimButton: "Claim Now", 
      tPromoCode: "Promo Code" 
    },
    argTypes: {
        title: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" }
        },
        promo_code: {
            control: { type: "text" }
        }
    },
    
}

export default meta;

type Story = StoryObj<typeof SpecialOfferCard>;

export const WithPromoCode: Story = {
    args: {
        ...specialOffersData[0]
    },
}
export const WithOutPromoCode: Story = {
    args: {
        ...specialOffersData[1]
    },
}