import React from "react";
import { render } from "@testing-library/react";
import GameBody from "../components/subcomponents/GameBody";

describe("Test GameBody", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<GameBody />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render GameBody and not be null", () => {
    const { asFragment } = render(<GameBody />);
    expect(asFragment()).not.toBeNull();
  });
});
