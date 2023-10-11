import { render, screen } from "@testing-library/react";

import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("renders headline", async () => {
    render(<App />);

    // check if App components renders headlines
    expect(
      screen.getByRole("heading", {
        name: "Test in react",
        level: 1,
      })
    ).toBeDefined();

    // if the order matters
    const [firstH2, secondH2] = screen.getAllByRole("heading", { level: 2 });
    expect(firstH2.textContent).toBe("Vite + React + Vitest + testing library");
    expect(secondH2.textContent).toBe("Playwright");

    // if the order doesn't matter
    expect(
      screen.getByRole("heading", {
        name: "Vite + React + Vitest + testing library",
        level: 2,
      })
    ).toBeDefined();
    expect(
      screen.getByRole("heading", {
        name: "Playwright",
        level: 2,
      })
    ).toBeDefined();
  });
});
