import type { Product } from "~/types";

import { create } from "zustand";

type Store = {
  isMenuVisible: boolean;
  setIsMenuVisible: (visible: boolean) => void;

  cart: Product[];
  addToCart: (product: Product) => void;
  isCartMenuVisible: boolean;
  setIsCartMenuVisible: (visible: boolean) => void;
};

const useStore = create<Store>()(set => ({
  cart: [],
  addToCart: (product: Product) =>
    set(state => ({ cart: [...state.cart, product] })),
  isCartMenuVisible: false,
  setIsCartMenuVisible: (visible: boolean) =>
    set({ isCartMenuVisible: visible }),

  isMenuVisible: false,
  setIsMenuVisible: (visible: boolean) => set({ isMenuVisible: visible }),
}));

export default useStore;
