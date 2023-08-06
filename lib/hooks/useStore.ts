import type { Product } from "~/types";

import { create } from "zustand";

type Store = {
  cart: Product[];
  addToCart: (product: Product) => void;

  isMenuVisible: boolean;
  setIsMenuVisible: (visible: boolean) => void;
};

const useStore = create<Store>()(set => ({
  cart: [],
  addToCart: (product: Product) =>
    set(state => ({ cart: [...state.cart, product] })),

  isMenuVisible: false,
  setIsMenuVisible: (visible: boolean) => set({ isMenuVisible: visible }),
}));

export default useStore;
