import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartItem, CartSliceState } from './type'
import { calcTotalPrice, calcTotalCount } from '../../utils/calcTotalPrice'

// Define the initial state using that type
const initialState: CartSliceState = {
  totalPrice: calcTotalPrice([]),
  totalCount: 0,
  list: []
}

export const pizzaSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, actions: PayloadAction<CartItem>){
      const findItem = state.list.find(item => item.id === actions.payload.id && item.size  === actions.payload.size)
      if(findItem) {
        findItem.count++
      } else {
        state.list.push({
          ...actions.payload,
          count: 1
        })
      }
      state.totalPrice = calcTotalPrice(state.list)
      state.totalCount = calcTotalCount(state.list)
    },
    increaseCount(state, actions: PayloadAction<{pizzaId: string, change: string}>){
       const findItem = state.list.find(item => item.pizzaId === actions.payload.pizzaId)
       if(findItem) {
          switch (actions.payload.change) {
            case 'increase':
              findItem.count++
              break;
            case 'decrease':
              if(findItem.count !== 1) {
                findItem.count--
              }
              break;
          
            default:
              break;
          }
          state.totalPrice = calcTotalPrice(state.list)
          state.totalCount = calcTotalCount(state.list)
       }
    },
    removeCart(state, actions: PayloadAction<string>){
      state.list = state.list.filter(item => item.pizzaId !== actions.payload)
      state.totalPrice = calcTotalPrice(state.list)
      state.totalCount = calcTotalCount(state.list)
      if(state.list.length === 0) {
        state.totalPrice = 0
        state.totalCount = 0
      }
    },
    clearCart(state) {
      state.list = []
      state.totalPrice = 0
      state.totalCount = 0
    }
  },
})

export const { addCart, removeCart, clearCart, increaseCount } = pizzaSlice.actions

export default pizzaSlice.reducer