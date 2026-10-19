import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Tabs from "./Tabs";

const renderTabs = () => {
  return render(
    <Tabs>
      <Tabs.List>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
        <Tabs.Tab id="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id="profile">
        Profile content
      </Tabs.Panel>

      <Tabs.Panel id="settings">
        Settings content
      </Tabs.Panel>

      <Tabs.Panel id="account">
        Account content
      </Tabs.Panel>
    </Tabs>
  );
};

describe("Tabs", () => {
  it("renders the tablist and all tabs", () => {
    renderTabs();

    expect(screen.getByRole("tablist")).toBeInTheDocument();

    expect(screen.getByRole("tab", { name: "Profile" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Settings" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Account" })).toBeInTheDocument();
  });

  it("makes the profile tab active by default", () => {
    renderTabs();

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    expect(profileTab).toHaveAttribute("aria-selected", "true");
  });

  it("shows the active panel", () => {
    renderTabs();

    expect(screen.getByRole("tabpanel")).toHaveTextContent(
      "Profile content"
    );
  });

  it("hides inactive panels", () => {
    renderTabs();

    expect(screen.getByRole("tabpanel")).toHaveTextContent(
      "Profile content"
    );

    expect(
      screen.queryByText("Settings content")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Account content")
    ).not.toBeInTheDocument();
  });

  it("changes the active tab when clicked", async () => {
    const user = userEvent.setup();

    renderTabs();

    const settingsTab = screen.getByRole("tab", {
      name: "Settings",
    });

    await user.click(settingsTab);

    expect(settingsTab).toHaveAttribute(
      "aria-selected",
      "true"
    );

    expect(
      screen.getByRole("tab", { name: "Profile" })
    ).toHaveAttribute("aria-selected", "false");

    expect(screen.getByRole("tabpanel")).toHaveTextContent(
      "Settings content"
    );
  });

  it("changes the active panel when clicking another tab", async () => {
    const user = userEvent.setup();

    renderTabs();

    await user.click(
      screen.getByRole("tab", { name: "Account" })
    );

    expect(screen.getByRole("tabpanel")).toHaveTextContent(
      "Account content"
    );

    expect(
      screen.queryByText("Profile content")
    ).not.toBeInTheDocument();
  });

  it("moves to the next tab with ArrowRight", async () => {
    const user = userEvent.setup();

    renderTabs();

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    profileTab.focus();

    await user.keyboard("{ArrowRight}");

    const settingsTab = screen.getByRole("tab", {
      name: "Settings",
    });

    expect(settingsTab).toHaveFocus();

    expect(settingsTab).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("moves to the previous tab with ArrowLeft", async () => {
    const user = userEvent.setup();

    renderTabs();

    const settingsTab = screen.getByRole("tab", {
      name: "Settings",
    });

    settingsTab.focus();

    await user.keyboard("{ArrowLeft}");

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    expect(profileTab).toHaveFocus();

    expect(profileTab).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("wraps to the first tab when ArrowRight is pressed on the last tab", async () => {
    const user = userEvent.setup();

    renderTabs();

    const accountTab = screen.getByRole("tab", {
      name: "Account",
    });

    accountTab.focus();

    await user.keyboard("{ArrowRight}");

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    expect(profileTab).toHaveFocus();

    expect(profileTab).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("wraps to the last tab when ArrowLeft is pressed on the first tab", async () => {
    const user = userEvent.setup();

    renderTabs();

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    profileTab.focus();

    await user.keyboard("{ArrowLeft}");

    const accountTab = screen.getByRole("tab", {
      name: "Account",
    });

    expect(accountTab).toHaveFocus();

    expect(accountTab).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("moves to the first tab when Home is pressed", async () => {
    const user = userEvent.setup();

    renderTabs();

    const accountTab = screen.getByRole("tab", {
      name: "Account",
    });

    accountTab.focus();

    await user.keyboard("{Home}");

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    expect(profileTab).toHaveFocus();

    expect(profileTab).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("moves to the last tab when End is pressed", async () => {
    const user = userEvent.setup();

    renderTabs();

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    profileTab.focus();

    await user.keyboard("{End}");

    const accountTab = screen.getByRole("tab", {
      name: "Account",
    });

    expect(accountTab).toHaveFocus();

    expect(accountTab).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("sets the correct ARIA attributes on tabs", () => {
    renderTabs();

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    expect(profileTab).toHaveAttribute(
      "aria-selected",
      "true"
    );

    expect(profileTab).toHaveAttribute(
      "aria-controls",
      "panel-profile"
    );

    expect(profileTab).toHaveAttribute(
      "id",
      "tab-profile"
    );
  });

  it("sets the correct ARIA attributes on the active panel", () => {
    renderTabs();

    const profilePanel = screen.getByRole("tabpanel");

    expect(profilePanel).toHaveAttribute(
      "id",
      "panel-profile"
    );

    expect(profilePanel).toHaveAttribute(
      "aria-labelledby",
      "tab-profile"
    );
  });

  it("only the active tab is keyboard focusable", () => {
    renderTabs();

    const profileTab = screen.getByRole("tab", {
      name: "Profile",
    });

    const settingsTab = screen.getByRole("tab", {
      name: "Settings",
    });

    const accountTab = screen.getByRole("tab", {
      name: "Account",
    });

    expect(profileTab).toHaveAttribute("tabIndex", "0");
    expect(settingsTab).toHaveAttribute("tabIndex", "-1");
    expect(accountTab).toHaveAttribute("tabIndex", "-1");
  });
});