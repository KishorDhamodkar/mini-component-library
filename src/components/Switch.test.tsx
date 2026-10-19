import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Switch from "./Switch";

describe("Switch", () => {
  it("renders with its label", () => {
    render(<Switch label="enable notification" />);

    expect(
      screen.getByRole("checkbox", { name: "enable notification" }),
    ).toBeInTheDocument();
  });
  it("is checked when defaultChecked is true", () => {
    render(<Switch label="Dark mode" defaultChecked />);

    expect(
      screen.getByRole("checkbox", {
        name: "Dark mode",
      }),
    ).toBeChecked();
  });
  it("is disabled when the disabled prop is true", () => {
    render(<Switch label="Unavailable" disabled />);

    expect(
      screen.getByRole("checkbox", {
        name: "Unavailable",
      }),
    ).toBeDisabled();
  });
});
