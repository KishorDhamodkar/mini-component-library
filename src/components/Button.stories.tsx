import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click Me",
  },
};

export const Secondry: Story = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "More Options",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Save",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Unavailable",
  },
};

export const LinkButton: Story = {
  args: {
    as: "a",
    href: "https://react.dev",
    variant: "primary",
    size: "md",
    children: "Learn React",
  },
};