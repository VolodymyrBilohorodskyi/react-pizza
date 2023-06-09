import { CartItem } from "../redux/cart/type";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
export const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};