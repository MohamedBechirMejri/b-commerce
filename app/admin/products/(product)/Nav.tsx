import { motion } from "framer-motion";

const tabs = [
  "details",
  "pricing",
  "images",
  // "variants",
  "inventory",
  "shipping",
  "seo",
  "related",
  "collections",
  "reviews",
  "activity",
];

export default function Nav({
  currentTab,
  switchTab,
}: {
  currentTab: string;
  switchTab: (tab: string) => void;
}) {
  return (
    <nav className="flex h-12 w-full justify-center gap-4 overflow-x-scroll">
      {tabs.map(tab => (
        <div
          key={tab}
          className="flex items-center justify-center"
          onClick={() => switchTab(tab)}
        >
          <motion.button
            initial={{ backgroundColor: "#222" }}
            animate={{
              backgroundColor: currentTab === tab ? "#6d28d9aa" : "#222",
              color: currentTab === tab ? "#fff" : "#aaa",
            }}
            whileHover={{
              backgroundColor: currentTab === tab ? "#6d28d9aa" : "#333",
            }}
            whileTap={{
              backgroundColor: currentTab === tab ? "#6d28d9aa" : "#444",
            }}
            className="rounded-md p-3 text-sm font-semibold uppercase tracking-wide"
          >
            {tab}
          </motion.button>
        </div>
      ))}
    </nav>
  );
}
