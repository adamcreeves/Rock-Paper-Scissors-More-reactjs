import React from "react";
import { render } from "@testing-library/react";
import Body from "../components/Body";

describe("Test Body", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Body />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render Body and not be null", () => {
    const { asFragment } = render(<Body />);
    expect(asFragment()).not.toBeNull();
  });
});
