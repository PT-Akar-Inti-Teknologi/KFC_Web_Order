import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Organism/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "figma",
    },
  },
};
export const TabPortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const TabLandscape: Story = {
  parameters: {
    viewport: {
      defaultViewport: "ipad12p",
    },
  },
};

export const Desktop: Story = {};
