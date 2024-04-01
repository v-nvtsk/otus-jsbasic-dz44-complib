import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Paragraph } from "../components/paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Example/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Expedita incidunt nam vitae veritatis
          repellendus laboriosam quae? Nobis qui atque perspiciatis aperiam
          dicta. Hic commodi maiores ullam nobis sed incidunt sequi!`,
  },
};

Primary.decorators = [
  (Story) => (
    <div id="#my-decorator">
      <Story />
    </div>
  ),
];
