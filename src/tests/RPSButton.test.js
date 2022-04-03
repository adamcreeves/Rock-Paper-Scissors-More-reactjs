import React from "react";
import { render } from "@testing-library/react";
import RPSButton from "../components/subcomponents/RPSButton";

describe("Test Body", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<RPSButton />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render Body and not be null", () => {
    const { asFragment } = render(<RPSButton />);
    expect(asFragment()).not.toBeNull();
  });
});
