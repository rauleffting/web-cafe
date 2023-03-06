import { useContext } from 'react'
import { HomeContainer } from './styles'
import { Banner } from './components/Banner'
import { Section } from './components/Section'
import { Card } from './components/Card'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { items } = useContext(CartContext)

  return (
    <HomeContainer>
      <Banner />
      <Section>
        {items.map((item) => {
          return <Card key={item.name} item={item} />
        })}
      </Section>
    </HomeContainer>
  )
}
