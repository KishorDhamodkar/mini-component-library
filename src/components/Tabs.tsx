import {
  createContext,
  useContext,
  useEffect,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabIds: string[];
  setTabIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs must be used inside a Tabs component");
  }

  return context;
};

// --------------------
// Types
// --------------------

type TabsProps = {
  children: ReactNode;
};

type ListProps = {
  children: ReactNode;
};

type TabProps = {
  id: string;
  children: ReactNode;
};

type PanelProps = {
  id: string;
  children: ReactNode;
};

// --------------------
// Tabs.List
// --------------------

const List = ({ children }: ListProps) => {
  return (
    <div
      role="tablist"
      className="flex gap-2 border-b border-gray-300"
    >
      {children}
    </div>
  );
};

// --------------------
// Tabs.Tab
// --------------------

const Tab = ({ id, children }: TabProps) => {
  const {
    activeTab,
    setActiveTab,
    tabIds,
    setTabIds,
  } = useTabs();

  const isActive = activeTab === id;

  // Register this tab
  useEffect(() => {
    setTabIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds;
      }

      return [...currentIds, id];
    });

    return () => {
      setTabIds((currentIds) =>
        currentIds.filter((tabId) => tabId !== id)
      );
    };
  }, [id, setTabIds]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = tabIds.indexOf(id);

    if (currentIndex === -1) {
      return;
    }

    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % tabIds.length;
        break;

      case "ArrowLeft":
        nextIndex =
          (currentIndex - 1 + tabIds.length) % tabIds.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = tabIds.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextTabId = tabIds[nextIndex];

    setActiveTab(nextTabId);

    const nextTab = document.getElementById(`tab-${nextTabId}`);

    nextTab?.focus();
  };

  return (
    <button
      id={`tab-${id}`}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(id)}
      onKeyDown={handleKeyDown}
      className={`px-4 py-2 text-sm transition-colors ${
        isActive
          ? "border-b-2 border-purple-600 font-semibold text-purple-600"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );
};

// --------------------
// Tabs.Panel
// --------------------

const Panel = ({ id, children }: PanelProps) => {
  const { activeTab } = useTabs();

  if (activeTab !== id) {
    return null;
  }

  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className="py-4 text-sm text-gray-700"
    >
      {children}
    </div>
  );
};

// --------------------
// Tabs
// --------------------

const Tabs = Object.assign(
  ({ children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState("profile");
    const [tabIds, setTabIds] = useState<string[]>([]);

    return (
      <TabsContext.Provider
        value={{
          activeTab,
          setActiveTab,
          tabIds,
          setTabIds,
        }}
      >
        {children}
      </TabsContext.Provider>
    );
  },
  {
    List,
    Tab,
    Panel,
  }
);

export default Tabs;