import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    id: "username",
    label: "Username",
    placeholder: "Enter your username",
    helperText: "Choose a unique username.",
  },
};

export const WithError: Story = {
  args: {
    id: "password",
    label: "Password",
    type: "password",
    error: "Password is required.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-email",
    label: "Email Address",
    placeholder: "Input is disabled",
    disabled: true,
  },
};