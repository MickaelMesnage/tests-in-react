import { fireEvent, render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("default value 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count is 0")).toBeDefined();
  });

  it("initial value", () => {
    render(<Counter initialValue={3} />);
    expect(screen.getByText("Count is 3")).toBeDefined();
  });

  it("incrementation", () => {
    render(<Counter />);
    expect(screen.getByText("Count is 0")).toBeDefined();
    fireEvent.click(screen.getByText("increment"));
    expect(screen.getByText("Count is 1")).toBeDefined();
  });

  it("decrementation", () => {
    render(<Counter />);
    expect(screen.getByText("Count is 0")).toBeDefined();
    fireEvent.click(screen.getByText("decrement"));
    expect(screen.getByText("Count is -1")).toBeDefined();
  });

  it("incrementation at max value not allowed", () => {
    render(<Counter initialValue={3} max={3} />);
    expect(screen.getByText("Count is 3")).toBeDefined();
    fireEvent.click(screen.getByText("increment"));
    expect(screen.getByText("Count is 3")).toBeDefined();
  });

  it("decrementation at min value not allowed", () => {
    render(<Counter initialValue={-2} min={-2} />);
    expect(screen.getByText("Count is -2")).toBeDefined();
    fireEvent.click(screen.getByText("decrement"));
    expect(screen.getByText("Count is -2")).toBeDefined();
  });
});
