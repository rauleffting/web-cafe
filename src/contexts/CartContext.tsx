import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'

interface CartContextType {}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
