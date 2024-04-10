import { render } from "@testing-library/react";
import React from "react";
import { Title } from ".";

describe("Image", () => {
  it("should render", () => {
    for (let i = 1; i <= 6; i += 1) {
      const component = render(<Title level={i}>Lorem ipsum title</Title>);
      expect(component.container).toBeInTheDocument();
      expect(component.container.querySelector(`h${i}`)).toBeInTheDocument();
      component.unmount();
    }
  });

  it("should render with default params", () => {
    const component = render(<Title>Lorem ipsum title</Title>);
    expect(component.container).toBeInTheDocument();
    expect(component.container.querySelector("h1")).toBeInTheDocument();
    component.unmount();
  });

  it("should render with wrong params", () => {
    let component = render(<Title level={0}>Lorem ipsum title</Title>);
    expect(component.container).toBeInTheDocument();
    expect(component.container.querySelector(`h${1}`)).toBeInTheDocument();
    component.unmount();

    component = render(<Title level={7}>Lorem ipsum title</Title>);
    expect(component.container).toBeInTheDocument();
    expect(component.container.querySelector(`h${6}`)).toBeInTheDocument();
    component.unmount();
  });
});
