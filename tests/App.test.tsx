import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";

import App from "../src/App";

describe("App", () => {
  it("should render the app", () => {
    const { getByRole, getByText } = render(() => <App />);

    expect(
      getByRole("heading", { name: /Huginn and Muninn/i })
    ).toBeInTheDocument();
    expect(
      getByText(/Lorem ipsum dolor sit, amet consectetur adipisicing elit/i)
    ).toBeInTheDocument();
  });
});
