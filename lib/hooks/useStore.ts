import type { Product } from "~/types";

import { create } from "zustand";

type Store = {
  menuStatus: "closed" | "nav" | "cart";
  setMenuStatus: (status: "closed" | "nav" | "cart") => void;

  cart: Product[];
  addToCart: (product: Product) => void;
};

const useStore = create<Store>()(set => ({
  menuStatus: "closed",
  setMenuStatus: (status: "closed" | "nav" | "cart") =>
    set({ menuStatus: status }),

  cart: [],
  addToCart: (product: Product) =>
    set(state => ({ cart: [...state.cart, product] })),
}));

export default useStore;
