import { SectionContainer, List, Card, CardFooter } from './styles'
import americanEspresso from './assets/american-espresso.svg'
import traditionalEspresso from './assets/traditional-espresso.svg'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface Items {
  image: string
  name: string
  price: string
  types: string[]
  description: string
}

export function Section() {
  const items: Items[] = [
    {
      image: americanEspresso,
      name: 'American Espresso',
      price: '9.90',
      types: ['traditional'],
      description: 'Diluted espresso, less intense than the traditional one',
    },
    {
      image: traditionalEspresso,
      name: 'Traditional Espresso',
      price: '9.90',
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
              {item.types.map((type) => {
                return <span key={type}>{type}</span>
              })}
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <CardFooter>
                <div className="price">
                  <span>$ </span>
                  <strong>{item.price}</strong>
                </div>
                <div className="buttons-wrapper">
                  <div className="counter">
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="cart-button">
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
