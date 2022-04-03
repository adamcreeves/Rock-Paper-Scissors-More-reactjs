import React from "react";
import { render } from "@testing-library/react";
import Title from "../components/subcomponents/Title";

describe("Test Body", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render Body and not be null", () => {
    const { asFragment } = render(<Title />);
    expect(asFragment()).not.toBeNull();
  });
});
