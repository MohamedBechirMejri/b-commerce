const tabs = [
  "details",
  "pricing",
  "images",
  "variants",
  "inventory",
  "shipping",
  "seo",
  "related",
  "collections",
  "reviews",
  "activity",
];

export default function ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}) {
  return (
    <nav className="flex h-12 w-full overflow-x-scroll">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex w-32 items-center justify-center text-sm font-semibold uppercase tracking-wide text-gray-500 hover:text-gray-600 ${
            currentTab === tab ? "text-gray-700" : ""
          }`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
