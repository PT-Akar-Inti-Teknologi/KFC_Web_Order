import { Meta, StoryObj } from "@storybook/react";
import SpecialOffersSection from "./SpecialOffers.page";
import { specialOffersData } from "./SpecialOffers.utils";

const meta: Meta<typeof SpecialOffersSection> = {
    title: "Organism/Sections/SpecialOffers",
    component: SpecialOffersSection,
    args: {
        title: "Special Offers",
        data: specialOffersData,
        seeAllLabel: "See all",
    },
    argTypes: {
        data: {
            control: { type: "object" },
        }
    }
}

export default meta;

type Story = StoryObj<typeof SpecialOffersSection>;

export const Phone: Story = {
    parameters: {
        viewport: {
            defaultViewport: "figma",
        }
    }
}
export const Desktop: Story = {}