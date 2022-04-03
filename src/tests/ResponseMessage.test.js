import React from "react";
import { render } from "@testing-library/react";
import ResponseMessage from "../components/subcomponents/ResponseMessage";

describe("Test Body", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<ResponseMessage />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render Body and not be null", () => {
    const { asFragment } = render(<ResponseMessage />);
    expect(asFragment()).not.toBeNull();
  });
});
