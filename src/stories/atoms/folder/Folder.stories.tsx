import type { Meta, StoryObj } from "@storybook/react";
import { Folder } from "./Folder";

const meta = {
  title: "Atoms/Folder",
  component: Folder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Folder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FolderExample: Story = {
  args: {
    title: "Folder",
    view: "list",
    propertyMenu: [
      {
        label: "menu 1",
        action: () => console.log(1),
      },
    ],
  },
};
