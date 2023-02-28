import { SectionContainer, List } from './styles'
import { ReactNode } from 'react'

interface Card {
  children: ReactNode /** it means that it will accept any valid jsx -> components, html tags, etc. like the children that was put below */
}

export function Section({ children }: Card) {
  return (
    <SectionContainer>
      <h2>Our cafes</h2>
      <List>{children}</List>
    </SectionContainer>
  )
}
