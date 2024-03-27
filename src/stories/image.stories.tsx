// image.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Image } from "../components/image";

const meta: Meta<typeof Image> = {
  title: "Example/Image",
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    url: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

// export const Primary: Story = {
//   render: () => <Image url="/image-test.jpg" alt="image" width={200} height={200} />,
// };

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
