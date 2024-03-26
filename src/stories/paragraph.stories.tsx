// accordion.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Paragraph } from "../components/paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Example/Paragraph",
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
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
