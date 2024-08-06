import { Meta, StoryObj } from "@storybook/react";
import BestSellerSection from "./BestSeller.page";
import { bestSellerData } from "./BestSeller.utils";


const storyData = bestSellerData.map((data) => {
    return {
        ...data,
        tAddToCart: "Add to cart",
    }
})

const meta: Meta<typeof BestSellerSection> = {
    title: "Organism/Sections/Best Seller",
    component: BestSellerSection,
    args: {
        title: "Best Seller",
        data: storyData,
        seeAllLabel: "See all",
    },
    argTypes: {
        data: {
            control: { type: "object" },
        }
    },
    parameters: {
        layout: ""
    }
}

export default meta;

type Story = StoryObj<typeof BestSellerSection>;

export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: "figma",
        }
    }
}
export const Desktop: Story = {}