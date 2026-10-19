import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Switch from "./components/Switch";
import Tabs from "./components/Tabs";
function App() {
  return (
    <div className="flex gap-4 p-8">
      <Button variant="primary" onClick={() => alert("Button clicked!")}>
        Click Me
      </Button>

      <Button as="a" href="https://react.dev" variant="secondary">
        Learn React
      </Button>

      <Button variant="danger" disabled>
        Disabled
      </Button>

      <Input id="username" label="Username" placeholder="Enter username" />

      <Checkbox label="Accept terms and conditions" />

      <Checkbox label="Subscribe to updates" defaultChecked />

      <Checkbox label="Unavailable option" disabled />

      <Switch label="Enable notifications" />
      <Switch label="Dark mode" defaultChecked />
      <Switch label="Unavailable" disabled />

      <Tabs>
        <Tabs.List>
          <Tabs.Tab id="profile">Profile</Tabs.Tab>
          <Tabs.Tab id="settings">Settings</Tabs.Tab>
          <Tabs.Tab id="account">Account</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel id="profile">
          <p>This is your profile.</p>
        </Tabs.Panel>

        <Tabs.Panel id="settings">
          <p>These are your settings.</p>
        </Tabs.Panel>

        <Tabs.Panel id="account">
          <p>This is your account.</p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;
