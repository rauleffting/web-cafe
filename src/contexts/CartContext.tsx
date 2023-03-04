import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'

import americanEspresso from '../assets/american-espresso.svg'
import arabicEspresso from '../assets/arabic.svg'
import traditionalEspresso from '../assets/traditional-espresso.svg'
import capuccino from '../assets/capuccino.svg'
import coffeWithMilk from '../assets/coffee-with-milk.svg'

export interface Items {
  id: number
  image: string
  name: string
  price: string
  types: string[]
  description: string
}

export interface CartItems extends Items {
  quantity: number
}

interface CartContextType {
  items: Items[]
  cartItems: CartItems[]
  handleAdd: (newCartItem: CartItems) => void
  quantity: number
  handleSum: () => void
  handleSub: () => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  // Section
  const items = [
    {
      id: 1,
      image: americanEspresso,
      name: 'American Espresso',
      price: '9.90',
      types: ['traditional'],
      description: 'Diluted espresso, less intense than the traditional one',
    },
    {
      id: 2,
      image: arabicEspresso,
      name: 'Arabic Espresso',
      price: '9.90',
      types: ['special'],
      description: 'Drink prepared with Arabic coffee beans and spices',
    },
    {
      id: 3,
      image: capuccino,
      name: 'Capuccino',
      price: '9.90',
      types: ['traditional', 'with milk'],
      description:
        'Cinnamon drink made from equal doses of coffee, milk and foam',
    },
    {
      id: 4,
      image: coffeWithMilk,
      name: 'Coffee With Milk',
      price: '9.90',
      types: ['traditional', 'with milk'],
      description: 'Half and half traditional espresso with steamed milk',
    },
    {
      id: 5,
      image: traditionalEspresso,
      name: 'Traditional Espresso',
      price: '9.90',
      types: ['traditional'],
      description: 'Traditional coffee made with hot water and ground beans',
    },
  ]
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  // Card
  const [quantity, setQuantity] = useState(1)

  function handleSum() {
    setQuantity(quantity + 1)
  }

  function handleSub() {
    const newQuantity = quantity - 1
    newQuantity <= 1 ? setQuantity(1) : setQuantity(newQuantity)
  }

  function handleAdd(newCartItem: CartItems) {
    const itemIndex = cartItems.findIndex(
      (item: CartItems) => item.id === newCartItem.id,
    )
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[itemIndex].quantity += newCartItem.quantity
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, newCartItem])
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        handleAdd,
        quantity,
        handleSum,
        handleSub,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
