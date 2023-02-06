import { SectionContainer, List, Card, CardFooter } from './styles'
import traditionalEspresso from './assets/traditional-espresso.svg'

import { ShoppingCart } from 'phosphor-react'

interface Items {
  image: string
  name: string
  price: number
  types: string[]
  description: string
}

export function Section() {
  const items: Items[] = [
    {
      image: traditionalEspresso,
      name: 'Traditional Espresso',
      price: 9.9,
      types: ['traditional'],
      description: 'Traditional coffee made with hot water and ground beans',
    },
  ]

  return (
    <SectionContainer>
      <h2>Our cafes</h2>
      <List>
        {items.map((item) => {
          return (
            <Card key={item.name}>
              <img src={item.image} alt="coffee image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <CardFooter>
                <div className="price">
                  <span>R$</span>
                  <strong>{item.price}</strong>
                </div>
                <div className="counter-cart-wrapper">
                  <div className="counter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button>
                    <ShoppingCart size={22} />
                  </button>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </List>
    </SectionContainer>
  )
}
