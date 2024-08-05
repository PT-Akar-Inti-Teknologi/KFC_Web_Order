import { Meta, StoryObj } from "@storybook/react";
import AppBanner from "./AppBanner";
import {fn} from "@storybook/test";

const meta:Meta<typeof AppBanner> = {
    title: "Organism/App Banner",
    component: AppBanner,
    tags: ["autodocs"],
    parameters:{
        backgrounds:{
            default: "dark"
        },
        viewport: {
            defaultViewport: "figma"
        }
    },
    args:{
        title: "Download KFCKU app",
        description: "Unlock more benefit",
        actionButton: "Download",
        onActionButtonClick: fn(),
        onCloseButtonClick: fn(),
    },
    argTypes: {
       title: {
           control: "text"
       },
       description: {
           control: "text"
       },
       actionButton: {
           control: "text"
       }
    }
};

export default meta
type Story = StoryObj<typeof AppBanner>;
export const Default: Story = {}