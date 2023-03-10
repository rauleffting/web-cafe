import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
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

interface createOrderData {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  st: string
  paymentMethod: string
  total: number
}

const initialOrderState: createOrderData = {
  zipCode: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  st: '',
  paymentMethod: '',
  total: 0,
}

interface CartContextType {
  items: Items[]
  cartItems: CartItems[]
  numberOfItems: number
  order: createOrderData
  handleAddToCart: (newCartItem: CartItems) => void
  handleSum: (name: string) => void
  handleSub: (name: string) => void
  handleRemove: (name: string) => void
  createNewOrder: (data: createOrderData) => void
  handleClearCart: () => void
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

  // const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
  //   const storedStateAsJSON = localStorage.getItem('@webcafe-1.0.0')

  //   if (storedStateAsJSON) {
  //     return JSON.parse(storedStateAsJSON)
  //   }
  // })

  const [cartItems, setCartItems] = useState<CartItems[]>([])

  const numberOfItems = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0,
  )

  const [order, setOrder] = useState<createOrderData>(initialOrderState)

  // function handleAddToCart(newCartItem: CartItems) {
  //   dispatch(addToCartAction(newCartItem))
  // }

  function handleAddToCart(newCartItem: CartItems) {
    const existingItem = cartItems.find(
      (item) => item.name === newCartItem.name,
    )
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === newCartItem.name
            ? { ...item, quantity: item.quantity + newCartItem.quantity }
            : item,
        ),
      )
    } else {
      setCartItems((prevItems) => [...prevItems, newCartItem])
    }
  }

  // function handleSum(name: string) {
  //   dispatch(updateQuantity(name, 1))
  // }

  function handleSum(name: string) {
    const existingItem = cartItems.find((item) => item.name === name)
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      )
    }
  }

  // function handleSub(name: string) {
  //   dispatch(updateQuantity(name, -1))
  // }

  function handleSub(name: string) {
    const existingItem = cartItems.find((item) => item.name === name)
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      )
    }
  }

  // function handleRemove(name: string) {
  //   dispatch(removeItem(name))
  // }

  function handleRemove(name: string) {
    const existingItem = cartItems.find((item) => item.name === name)
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.name !== name),
      )
    }
  }

  function createNewOrder(data: createOrderData) {
    setOrder({ ...data })
  }

  function handleClearCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem('@webcafe-1.0.0', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        numberOfItems,
        order,
        handleAddToCart,
        handleSum,
        handleSub,
        handleRemove,
        createNewOrder,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
