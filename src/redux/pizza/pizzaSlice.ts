import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzaList } from './type'
import pizzaLists from '../../assets/pizzas.json'
// Define a type for the slice state
interface PizzaState {
  lists: PizzaList[],
  filtered: PizzaList[],
}

const initialState: PizzaState = {
  lists: pizzaLists,
  filtered: pizzaLists,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    filterPizza(state, actions: PayloadAction<string>) {
      console.log(actions.payload);
      state.filtered = state.lists.filter(item => {        
        return item.title.toLowerCase().includes(actions.payload.toLowerCase())
      })
    }
  },
})

export const { filterPizza } = pizzaSlice.actions

export default pizzaSlice.reducer