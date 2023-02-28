import { useState } from 'react'
import { HomeContainer } from './styles'
import { Banner } from './components/Banner'
import { Section } from './components/Section'
import { Card } from './components/Card'

import americanEspresso from '../../assets/american-espresso.svg'
import arabicEspresso from '../../assets/arabic.svg'
import traditionalEspresso from '../../assets/traditional-espresso.svg'
import capuccino from '../../assets/capuccino.svg'
import coffeWithMilk from '../../assets/coffee-with-milk.svg'

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

export function Home() {
  const items: Items[] = [
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
  const [cartItems, setCartItems] = useState<Items[]>([])

  function handleAdd(item: CartItems) {
    const newItem = {
      ...item,
    }

    setCartItems([...cartItems, newItem])
  }

  return (
    <HomeContainer>
      <Banner />
      <Section>
        {items.map((item) => {
          return <Card key={item.id} item={item} handleAdd={handleAdd} />
        })}
      </Section>
    </HomeContainer>
  )
}
