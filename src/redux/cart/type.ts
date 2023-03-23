export type CartItem = {
    id: string,
    title: string, 
    imgUrl: string,
    price: number,
    size: string,
    crust: string,
    count: number,
    pizzaId: string,
}

export interface CartSliceState {
  totalPrice: number;
  totalCount: number,
  list: CartItem[];
}