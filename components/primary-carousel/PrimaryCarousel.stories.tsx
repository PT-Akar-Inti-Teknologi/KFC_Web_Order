import { Meta, StoryObj } from "@storybook/react";
import PrimaryCarousel from "./PrimaryCarousel";
import { primaryCarouselData } from "./PrimaryCarousel.utils";

const meta: Meta<typeof PrimaryCarousel> = {
    title: "Organism/Carousel/PrimaryCarousel",
    component: PrimaryCarousel,
    tags: ["autodocs"],
    args: {
        data: primaryCarouselData,
    },
    argTypes: {
        data: {
            control: { type: "object" },
        }
    }
}

export default meta;

type Story = StoryObj<typeof PrimaryCarousel>;

export const Default: Story = {}