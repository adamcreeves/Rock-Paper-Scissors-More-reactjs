import { render } from "@testing-library/react";
import App from "../app/App";

describe("Test App", () => {
  it("renders app", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render Body and not be null", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).not.toBeNull();
  });
});
