// title.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Title } from "../components/title";

const meta: Meta<typeof Title> = {
  title: "Example/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "number" },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Level1: Story = {
  args: {
    level: 1,
    children: "Title 1",
  },
};
export const Level2: Story = {
  args: {
    level: 2,
    children: "Title 2",
  },
};
export const Level3: Story = {
  args: {
    level: 3,
    children: "Title 3",
  },
};
export const Level4: Story = {
  args: {
    level: 3,
    children: "Title 4",
  },
};
export const Level5: Story = {
  args: {
    level: 3,
    children: "Title 5",
  },
};
export const Level6: Story = {
  args: {
    level: 3,
    children: "Title 6",
  },
};

Level1.decorators = [
  (Story) => (
    <div id="#my-decorator">
      <Story />
    </div>
  ),
];

Level2.decorators = Level1.decorators;
Level3.decorators = Level1.decorators;
Level4.decorators = Level1.decorators;
Level5.decorators = Level1.decorators;
Level6.decorators = Level1.decorators;
