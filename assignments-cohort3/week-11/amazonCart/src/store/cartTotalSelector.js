import { selector } from "recoil";
import { cartItemState } from "./cartItemState";

export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) => {
    const cartItems = get(cartItemState);

    const total = cartItems.reduce(
      (acc, item) => {
        acc.totalPrice += item.price * item.quantity;
        acc.totalItems += item.quantity;
        return acc;
      },
      { totalPrice: 0, totalItems: 0 }
    );

    return total;
  },
});
