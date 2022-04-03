import React from "react";
import { render } from "@testing-library/react";
import RPSButton from "../components/subcomponents/RPSButton";

describe("Test RPSButton", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<RPSButton />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render RPSButton and not be null", () => {
    const { asFragment } = render(<RPSButton />);
    expect(asFragment()).not.toBeNull();
  });
});
