import React from "react";
import { render } from "@testing-library/react";
import RegisterPlayers from "../components/subcomponents/RegisterPlayers";

describe("Test RegisterPlayers", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<RegisterPlayers />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render RegisterPlayers and not be null", () => {
    const { asFragment } = render(<RegisterPlayers />);
    expect(asFragment()).not.toBeNull();
  });
});
