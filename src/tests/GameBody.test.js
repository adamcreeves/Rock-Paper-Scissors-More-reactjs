import React from "react";
import { render } from "@testing-library/react";
import GameBody from "../components/subcomponents/GameBody";

describe("Test Body", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<GameBody />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render Body and not be null", () => {
    const { asFragment } = render(<GameBody />);
    expect(asFragment()).not.toBeNull();
  });
});
