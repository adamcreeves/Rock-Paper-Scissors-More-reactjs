import React from "react";
import { render } from "@testing-library/react";
import ScoreBoard from "../components/subcomponents/ScoreBoard";

describe("Test ScoreBoard", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<ScoreBoard />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render ScoreBoard and not be null", () => {
    const { asFragment } = render(<ScoreBoard />);
    expect(asFragment()).not.toBeNull();
  });
});
