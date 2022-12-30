import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type Category from "../../../types/Category";
import NavMenu from "./NavMenu";

const categories = [
  {
    id: "1",
    name: "Home1",
    subCategories: [
      {
        id: "2",
        name: "Home",
        subCategories: [
          {
            id: "3",
            name: "Home",
            subCategories: [
              {
                id: "4",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "5",
            name: "Home",
            subCategories: [
              {
                id: "6",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "7",
            name: "Home",
            subCategories: [
              {
                id: "8",
                name: "Home",
                subCategories: [],
              },
            ],
          },
        ],
      },
      {
        id: "9",
        name: "Home",
        subCategories: [
          {
            id: "10",
            name: "Home",
            subCategories: [
              {
                id: "11",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "12",
            name: "Home",
            subCategories: [
              {
                id: "0-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "13",
            name: "Home",
            subCategories: [
              {
                id: "0-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
        ],
      },
      {
        id: "14",
        name: "Home",
        subCategories: [
          {
            id: "15",
            name: "Home",
            subCategories: [
              {
                id: "16",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "17",
            name: "Home",
            subCategories: [
              {
                id: "18",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "19",
            name: "Home",
            subCategories: [
              {
                id: "20",
                name: "Home",
                subCategories: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "21",
    name: "Home",
    subCategories: [
      {
        id: "22",
        name: "Home",
        subCategories: [
          {
            id: "231-2",
            name: "Home",
            subCategories: [
              {
                id: "1-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "124-2",
            name: "Home",
            subCategories: [
              {
                id: "1-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "125-2",
            name: "Home",
            subCategories: [
              {
                id: "261-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
        ],
      },
      {
        id: "1-271",
        name: "Home",
        subCategories: [
          {
            id: "128-2",
            name: "Home",
            subCategories: [
              {
                id: "129-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "1-392",
            name: "Home",
            subCategories: [
              {
                id: "1-373",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "148-2",
            name: "Home",
            subCategories: [
              {
                id: "158-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
        ],
      },
      {
        id: "1-681",
        name: "Home",
        subCategories: [
          {
            id: "1-269",
            name: "Home",
            subCategories: [
              {
                id: "1-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "179-2",
            name: "Home",
            subCategories: [
              {
                id: "1-3",
                name: "Home",
                subCategories: [],
              },
            ],
          },
          {
            id: "170-2",
            name: "Home",
            subCategories: [
              {
                id: "1-4673",
                name: "Home",
                subCategories: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [submenu, setSubMenu] = useState<Category[] | null>(null);

  // TODO: use better design

  return (
    <motion.nav
      initial={{ x: "-20rem" }}
      animate={{ x: isOpen ? 0 : "-20rem" }}
      transition={{ type: "spring", damping: 27, stiffness: 150 }}
      className="absolute top-0 z-50 flex h-screen w-[20rem] select-none flex-col text-3xl font-bold text-slate-100"
      onMouseLeave={() => setSubMenu(null)}
    >
      <div className="z-50 h-full w-full overflow-scroll bg-slate-900 py-8 scrollbar-none">
        {categories.map((category) => {
          return (
            <NavMenu
              key={category.name} // TODO: replace with id
              category={category}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              submenu={submenu}
              setSubMenu={setSubMenu}
            />
          );
        })}
      </div>
      <motion.div
        initial={{ x: "-40rem" }}
        animate={{ x: submenu ? 0 : "-40rem" }}
        transition={{ type: "spring", damping: 27, stiffness: 150 }}
        className="fixed top-0 left-[20rem] grid h-screen w-[40rem] origin-left grid-cols-3 overflow-y-scroll bg-slate-700 p-8 scrollbar-none"
      >
        {submenu &&
          submenu.map((category) => (
            <div key={category.id} className="grid h-max w-full gap-2">
              <Link href={"/category/" + category.id} className="font-medium">
                {category.name}
              </Link>
              <ul>
                {category.subCategories &&
                  category.subCategories.map((category) => (
                    <li key={category.id} className="text-base font-light">
                      <Link href={"/categories/" + category.id}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
