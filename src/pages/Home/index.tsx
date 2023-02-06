import { HomeContainer } from './styles'
import { Section } from '../../components/Section'
import { Banner } from '../../components/Banner'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Section />
    </HomeContainer>
  )
}
