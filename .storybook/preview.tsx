import React from "react";
import localFont from "next/font/local";

import type { Preview } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import { NextIntlClientProvider } from "next-intl";
import { Lato } from "next/font/google";
import { cn } from "../lib/utils";
import messageEn from "../messages/en.json";

// setup fonts
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const national2condensed = localFont({
  src: [
    {
      path: "../assets/fonts/National2Condensed/National2Condensed-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/National2Condensed/National2Condensed-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/National2Condensed/National2Condensed-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/National2Condensed/National2Condensed-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-national2condensed",
});

const CUSTOM_VIEWPORTS = {
  figma: {
    name: 'Figma',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
};

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS
      },
      defaultViewport: "Responsive",
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#202124" },
        { name: "primary", value: "#E4002B" },
      ],
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider
        locale="en"
        messages={{
          locale: "en",
          messages: messageEn,
        }}
      >
        <div
          className={cn([
            national2condensed.variable,
            lato.variable,
            "font-lato",
            "text-neutral-900",
            "w-full flex",
          ])}
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Story />
        </div>
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
