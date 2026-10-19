import Switch from "./Switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Components/Switch",
    component: Switch,
    tags: ["autodocs"],
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args : {
        label: "Enable notification"
    }
}

export const DefaultIsChecked: Story = {
    args : {
        label: "Night Mode",
        defaultChecked: true
    }
}

export const Disabled: Story = {
    args : {
        label: "Unavailable",
        disabled: true
    }
}