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
    <nav className="flex justify-center w-full h-12 gap-4 overflow-x-scroll">
      {tabs.map(tab => (
        <div
          key={tab}
          className="flex items-center justify-center"
          onClick={() => switchTab(tab)}
        >
          <motion.button
            initial={{ opacity: 0, y: 10, backgroundColor: "#6d28d922" }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundColor: currentTab === tab ? "#6d28d9" : "#6d28d922",
              color: currentTab === tab ? "#fff" : "#6d28d9",
            }}
            whileHover={{
              backgroundColor: currentTab === tab ? "#6d28d9" : "#6d28d933",
            }}
            whileTap={{
              backgroundColor: currentTab === tab ? "#6d28d9" : "#6d28d944",
            }}
            transition={{ duration: 0.2 }}
            className="p-3 text-sm font-semibold tracking-wide uppercase rounded-md"
          >
            {tab}
          </motion.button>
        </div>
      ))}
    </nav>
  );
}
