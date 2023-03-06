/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
import { ActionTypes } from './actions'
import { CartItems } from '../../contexts/CartContext'

export function cartReducer(state: CartItems[] = [], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const existingItem1 = state.find(
        (item) => item.name === action.payload.newCartItem.name,
      )
      if (existingItem1) {
        return state.map((item) =>
          item.name === action.payload.newCartItem.name
            ? {
                ...item,
                quantity: item.quantity + action.payload.newCartItem.quantity,
              }
            : item,
        )
      } else {
        return [...state, action.payload.newCartItem]
      }

    case ActionTypes.UPDATE_QUANTITY:
      const existingItem2 = state.find(
        (item) => item.name === action.payload.name,
      )
      if (existingItem2) {
        return state.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + action.payload.value }
            : item,
        )
      }

    case ActionTypes.REMOVE_ITEM:
      const existingItem3 = state.find(
        (item) => item.name === action.payload.name,
      )
      if (existingItem3) {
        return state.filter((item) => item.name !== action.payload.name)
      }

    default:
      return state
  }
}
