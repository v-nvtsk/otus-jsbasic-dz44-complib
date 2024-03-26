// accordion.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Spacer } from "../components/spacer";

const meta: Meta<typeof Spacer> = {
  title: "Example/Spacer",
  component: Spacer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    space: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Primary: Story = {
  args: {
    space: 20,
  },
};

Primary.decorators = [
  (Story) => (
    <div id="#my-decorator">
      <Story />
    </div>
  ),
];
