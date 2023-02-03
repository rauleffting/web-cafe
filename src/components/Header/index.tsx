import { HeaderContainer, Logo, LocationAndCart } from './styles'
import logo from '../../assets/web-cafe-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="cup" />
        <div>
          <p>Web</p>
          <span>Cafe</span>
        </div>
      </Logo>

      <LocationAndCart>
        <div className="location">
          <MapPin size={22} />
          <span>São Paulo, SP</span>
        </div>
        <button className="cart">
          <ShoppingCart size={22} />
          <span>1</span>
        </button>
      </LocationAndCart>
    </HeaderContainer>
  )
}
