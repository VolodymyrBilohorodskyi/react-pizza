export type PizzaList = { 
  id: string,
  title: string, 
  description: string,
  imgUrl: string,
  toppings:string[],
  rating: number,
  options: {
    sizes: string[],
    crust: string[],
    price: {
      small: number,
      medium: number,
      large: number,
    } 
  }
}