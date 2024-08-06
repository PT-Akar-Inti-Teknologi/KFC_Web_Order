import { Meta, StoryObj } from "@storybook/react";
import UnlockBanner from "./UnlockBanner";

const meta: Meta<typeof UnlockBanner> = {
  title: "Organism/Banner/Unlock Banner",
  component: UnlockBanner,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    title: "UNLOCK More Finger Lickin’\nGood BENEFITS",
    description:
      "Create an account to get access to exclusive promos and rewards, and reorder your favorites.",
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

type Story = StoryObj<typeof UnlockBanner>;

export default meta;

export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: "figma",
        }
    }
}
export const Desktop: Story = {}