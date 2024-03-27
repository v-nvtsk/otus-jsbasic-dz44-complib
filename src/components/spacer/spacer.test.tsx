import { render } from "@testing-library/react";
import React from "react";
import { Spacer } from ".";

describe("Image", () => {
  it("should render with default params", () => {
    const component = render(<Spacer />);
    expect(component.container).toBeInTheDocument();
    expect(component.container.querySelector("hr")).toBeInTheDocument();
    expect(component.container.querySelector("div")).toHaveStyle(
      "padding-top: 10px; padding-bottom: 10px;",
    );
    component.unmount();
  });

  it("should render", () => {
    const component = render(<Spacer space={20} />);
    expect(component.container).toBeInTheDocument();
    expect(component.container.querySelector("hr")).toBeInTheDocument();
    expect(component.container.querySelector("div")).toHaveStyle(
      "padding-top: 20px; padding-bottom: 20px;",
    );
    component.unmount();
  });
});
