import type { Product } from "~/types";

import { create } from "zustand";

type Store = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const useStore = create<Store>()(set => ({
  cart: [],
  addToCart: (product: Product) =>
    set(state => ({ cart: [...state.cart, product] })),
}));

export default useStore;
