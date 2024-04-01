import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Image } from "../components/image";

const meta: Meta<typeof Image> = {
  title: "Example/Image",
  component: Image,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    url: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    url: "/image-test.jpg",
    alt: "image",
    width: 200,
    height: 200,
  },
};

Primary.decorators = [
  (Story) => (
    <div id="#my-decorator">
      <Story />
    </div>
  ),
];
