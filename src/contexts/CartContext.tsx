import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useRef,
} from 'react'

import americanEspresso from '../assets/american-espresso.svg'
import arabicEspresso from '../assets/arabic.svg'
import traditionalEspresso from '../assets/traditional-espresso.svg'
import capuccino from '../assets/capuccino.svg'
import coffeWithMilk from '../assets/coffee-with-milk.svg'

import { cartReducer } from '../reducers/cart/reducer'
import {
  addToCartAction,
  removeItem,
  updateQuantity,
} from '../reducers/cart/actions'

export interface Items {
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
  handleAddToCart: (newCartItem: CartItems) => void
  numberOfItems: number
  handleSum: (name: string) => void
  handleSub: (name: string) => void
  handleRemove: (name: string) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const items = [
    {
      image: americanEspresso,
      name: 'American Espresso',
      price: '9.90',
      types: ['traditional'],
      description: 'Diluted espresso, less intense than the traditional one',
    },
    {
      image: arabicEspresso,
      name: 'Arabic Espresso',
      price: '9.90',
      types: ['special'],
      description: 'Drink prepared with Arabic coffee beans and spices',
    },
    {
      image: capuccino,
      name: 'Capuccino',
      price: '9.90',
      types: ['traditional', 'with milk'],
      description:
        'Cinnamon drink made from equal doses of coffee, milk and foam',
    },
    {
      image: coffeWithMilk,
      name: 'Coffee With Milk',
      price: '9.90',
      types: ['traditional', 'with milk'],
      description: 'Half and half traditional espresso with steamed milk',
    },
    {
      image: traditionalEspresso,
      name: 'Traditional Espresso',
      price: '9.90',
      types: ['traditional'],
      description: 'Traditional coffee made with hot water and ground beans',
    },
  ]

  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const storedStateAsJSON = localStorage.getItem('@webcafe-1.0.0')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
  })

  const [numberOfItems, setNumberOfItems] = useState(0)

  function handleAddToCart(newCartItem: CartItems) {
    dispatch(addToCartAction(newCartItem))
  }

  console.log('renderizado')

  function handleSum(name: string) {
    dispatch(updateQuantity(name, 1))
  }

  function handleSub(name: string) {
    dispatch(updateQuantity(name, -1))
  }

  function handleRemove(name: string) {
    dispatch(removeItem(name))
  }

  const prevCartItems = useRef(cartItems)

  useEffect(() => {
    if (cartItems !== prevCartItems.current) {
      const stateJSON = JSON.stringify(cartItems)
      localStorage.setItem('@webcafe-1.0.0', stateJSON)

      const counter = cartItems.reduce(
        (total, item) => (total += item.quantity),
        0,
      )
      setNumberOfItems(counter)

      prevCartItems.current = cartItems
    }
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        handleAddToCart,
        numberOfItems,
        handleSum,
        handleSub,
        handleRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
