import Tabs from "./Tabs";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
        <Tabs.Tab id="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id="profile">
        This is the profile content.
      </Tabs.Panel>

      <Tabs.Panel id="settings">
        This is the settings content.
      </Tabs.Panel>

      <Tabs.Panel id="account">
        This is the account content.
      </Tabs.Panel>
    </Tabs>
  ),
};

export const SettingsContent: Story = {
  render: () => (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
        <Tabs.Tab id="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id="profile">
        Profile information goes here.
      </Tabs.Panel>

      <Tabs.Panel id="settings">
        You can configure your application settings here.
      </Tabs.Panel>

      <Tabs.Panel id="account">
        Account information goes here.
      </Tabs.Panel>
    </Tabs>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab id="overview">Overview</Tabs.Tab>
        <Tabs.Tab id="details">Details</Tabs.Tab>
        <Tabs.Tab id="history">History</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id="overview">
        <h3 className="mb-2 font-semibold text-gray-900">
          Overview
        </h3>
        <p>
          This panel contains an overview of the current item.
          You can place forms, text, lists, or other components
          inside a tab panel.
        </p>
      </Tabs.Panel>

      <Tabs.Panel id="details">
        <h3 className="mb-2 font-semibold text-gray-900">
          Details
        </h3>
        <p>
          This panel contains detailed information about the
          item.
        </p>
      </Tabs.Panel>

      <Tabs.Panel id="history">
        <h3 className="mb-2 font-semibold text-gray-900">
          History
        </h3>
        <p>
          This panel contains the history of changes.
        </p>
      </Tabs.Panel>
    </Tabs>
  ),
};