import { HomeContainer } from './styles'
import { Section } from '../../components/ItemList'
import { Banner } from '../../components/Banner'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Section />
    </HomeContainer>
  )
}
