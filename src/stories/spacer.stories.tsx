import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Spacer } from "../components/spacer";

const meta: Meta<typeof Spacer> = {
  title: "Example/Spacer",
  component: Spacer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
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
