import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Accordion } from "../components/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    items: [],
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    items: [
      {
        title: "Accordion Item #1",
        content: (
          <p>{`Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Expedita incidunt nam vitae veritatis
          repellendus laboriosam quae? Nobis qui atque perspiciatis aperiam
          dicta. Hic commodi maiores ullam nobis sed incidunt sequi!`}</p>
        ),
        initiallyOpened: false,
      },
      {
        title: "Accordion Item #2",
        content: (
          <p>{`Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolor quasi eum ratione, possimus sed
          nemo at temporibus sequi dicta, reiciendis, minus veritatis
          expedita est voluptas nobis quis corrupti. Commodi, magni.`}</p>
        ),
        initiallyOpened: true,
      },
      {
        title: "Accordion Item #3",
        content: (
          <p>{`Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolor quasi eum ratione, possimus sed
          nemo at temporibus sequi dicta, reiciendis, minus veritatis
          expedita est voluptas nobis quis corrupti. Commodi, magni.`}</p>
        ),
        initiallyOpened: false,
      },
    ],
  },
};
Primary.decorators = [
  (Story) => (
    <div id="#my-decorator">
      <Story />
    </div>
  ),
];
