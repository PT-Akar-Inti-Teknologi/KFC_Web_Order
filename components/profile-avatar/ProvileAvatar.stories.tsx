import { Meta, StoryObj } from "@storybook/react";
import ProfileAvatar from "./ProfileAvatar";
import { ComponentProps } from "react";

export type ProfileAvatarStoryProps = ComponentProps<typeof ProfileAvatar> 

const meta: Meta<ProfileAvatarStoryProps> = {
    title: "Organism/Profile/ProfileAvatar",
    component: ProfileAvatar,
    tags: ["autodocs"],
    argTypes: {
        tier: {
            options: ["basic", "gold", "platinum"],
            control: { type: "select" }
        },
        name: { control: "text" },
        src: { control: "text" }
    },
    parameters:{
        backgrounds:{
            default: "primary"
        },
        layout: "centered"
    },
    args: {
        tier: "basic",
        name: "John Doe",
        src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
}

export default meta
type Story = StoryObj<ProfileAvatarStoryProps>

export const Default: Story = {}