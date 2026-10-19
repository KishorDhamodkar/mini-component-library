import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("TestRenders the checkbox with its label.", () => {
    render(<Checkbox label="Accept terms and conditions" />);

    expect(
      screen.getByRole("checkbox", { name: "Accept terms and conditions" }),
    ).toBeInTheDocument();
  });

  it("starts check when checked is true", () => {
    render(<Checkbox label="Subscribe to updates" defaultChecked />);

    expect(
      screen.getByRole("checkbox", { name: "Subscribe to updates" }),
    ).toBeChecked();
  });

  it("is disable when disabled prop is true", () => {
    render(<Checkbox label="Unavailable option" disabled />);

    expect(
      screen.getByRole("checkbox", { name: "Unavailable option" }),
    ).toBeDisabled();
  });
});
