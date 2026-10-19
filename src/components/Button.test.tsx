import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Click Me</Button>);

    expect(
      screen.getByRole("button", { name: "Click Me" }),
    ).toBeInTheDocument();
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Button disabled>Click Me</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows a loading label and disables the button", () => {
    render(<Button loading>Save</Button>);

    const button = screen.getByRole("button", {
      name: "Loading...",
    });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it("renders as a link when the as prop is provided", () => {
    render(
      <Button as="a" href="https://react.dev">
        Learn React
      </Button>,
    );

    const link = screen.getByRole("link", {
      name: "Learn React",
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://react.dev");
  });

  it("applies the disabled state when rendered as a link", () => {
    render(
      <Button as="a" href="https://react.dev" disabled>
        Learn React
      </Button>,
    );

    const link = screen.getByRole("link", {
      name: "Learn React",
    });

    expect(link).toHaveAttribute("aria-disabled", "true");
  });
  it("prevents navigation when a link is disabled", async () => {
    const user = userEvent.setup();

    render(
      <Button as="a" href="https://react.dev" disabled>
        Learn React
      </Button>,
    );

    const link = screen.getByRole("link", {
      name: "Learn React",
    });

    await user.click(link);

    expect(link).toHaveAttribute("aria-disabled", "true");
  });
});
