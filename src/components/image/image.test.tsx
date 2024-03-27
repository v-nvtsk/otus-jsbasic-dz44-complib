import { render } from "@testing-library/react";
import React from "react";
import { Image } from "./image";

describe("Image", () => {
  it("should render", () => {
    const component = render(<Image url="https://via.placeholder.com/150" />);
    expect(component.container).toBeInTheDocument();
    component.unmount();
  });
});
