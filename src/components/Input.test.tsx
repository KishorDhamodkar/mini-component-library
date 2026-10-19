import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Input from "./Input";

describe("Input", () => {
  it("renders with its label", () => {
    render(<Input id="email" label="Email Address" />);

    expect(
      screen.getByRole("textbox", { name: "Email Address" }),
    ).toBeInTheDocument();
  });

  it("renders helper text when provided", () => {
    render(
      <Input
        id="email"
        label="Email Address"
        helperText="Use your work email."
      />,
    );

    expect(screen.getByText("Use your work email.")).toBeInTheDocument();
  });

  it("renders an error message when provided", () => {
    render(
      <Input id="username" label="Username" error="Username is required." />,
    );

    expect(screen.getByText("Username is required.")).toBeInTheDocument();
  });

  it("is disabled when the disabled prop is true", () => {
  render(
    <Input
      id="email"
      label="Email Address"
      disabled
    />
  );

  expect(
    screen.getByRole("textbox", { name: "Email Address" })
  ).toBeDisabled();
});
});
