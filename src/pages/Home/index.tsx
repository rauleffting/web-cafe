import { useContext } from 'react'
import { HomeContainer } from './styles'
import { Banner } from './components/Banner'
import { Section } from './components/Section'
import { Card } from './components/Card'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { items, cartItems } = useContext(CartContext)

  function handleDebug() {
    console.log(cartItems)
  }

  return (
    <HomeContainer>
      <Banner />
      <button onClick={handleDebug}>debug</button>
      <Section>
        {items.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </Section>
    </HomeContainer>
  )
}
