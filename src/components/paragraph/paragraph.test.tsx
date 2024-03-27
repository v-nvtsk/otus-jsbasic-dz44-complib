import { render } from "@testing-library/react";
import React from "react";
import { Paragraph } from ".";

describe("Image", () => {
  it("should render", () => {
    const component = render(
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
        accusamus aperiam corrupti fuga veritatis ullam. Ducimus nam libero
        recusandae praesentium vero accusantium repellat alias ipsa officiis
        laudantium maxime, ipsam fuga!
      </Paragraph>,
    );
    expect(component.container).toBeInTheDocument();
    component.unmount();
  });
});
