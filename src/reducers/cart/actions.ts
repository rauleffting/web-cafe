import { CartItems } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function addToCartAction(newCartItem: CartItems) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      newCartItem,
    },
  }
}

export function updateQuantity(name: string, value: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: {
      name,
      value,
    },
  }
}

export function removeItem(name: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      name,
    },
  }
}
