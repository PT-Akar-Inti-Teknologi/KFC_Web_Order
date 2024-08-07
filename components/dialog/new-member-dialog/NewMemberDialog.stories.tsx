import { Meta, StoryObj } from "@storybook/react";
import { NewMemberDialog } from "./NewMemberDialog";
import { fn } from "@storybook/test";
import message from "@/messages/en.json";

const meta: Meta<typeof NewMemberDialog> = {
  title: "Organism/Dialog/New Member",
  component: NewMemberDialog,
  args: {
    t: {
      title: message.NewMemberDialog.title,
      description: message.NewMemberDialog.description,
      actionButton: message.NewMemberDialog.actionButton,
    },
    open: true,
    onClose: fn(),
  }
};


type Story = StoryObj<typeof NewMemberDialog>;
export const Default: Story = {}


export default meta