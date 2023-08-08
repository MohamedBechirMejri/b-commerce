import type { Product } from "~/types";

import { create } from "zustand";

type Store = {
  menuStatus: "closed" | "nav" | "cart";
  setMenuStatus: (status: "closed" | "nav" | "cart") => void;

  cart: {
    product: Product;
    quantity: number;
  }[];
  addToCart: (product: Product, quantity?: number) => void;
  reduceItem: (productId: string) => void;
  removeItem: (productId: string) => void;
};

const useStore = create<Store>()(set => ({
  menuStatus: "closed",
  setMenuStatus: (status: "closed" | "nav" | "cart") =>
    set({ menuStatus: status }),

  cart: [],
  addToCart: (product, quantity = 1) =>
    set(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.product.id === product.id);

      if (index === -1) cart.push({ product, quantity: 1 });
      else cart[index].quantity += quantity;

      if (cart[index]?.quantity > product.maxBuy)
        cart[index].quantity = product.maxBuy;

      return { cart };
    }),
  reduceItem: productId =>
    set(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.product.id === productId);

      if (index === -1) return state;

      cart[index].quantity -= 1;

      // remove item if quantity is 0
      if (cart[index].quantity <= 0) cart.splice(index, 1);

      return { cart };
    }),
  removeItem: productId =>
    set(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.product.id === productId);

      if (index === -1) return state;

      cart.splice(index, 1);

      return { cart };
    }),
}));

export default useStore;
