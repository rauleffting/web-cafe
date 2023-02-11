import { HeaderContainer, LocationAndCart } from './styles'
import logo from '../../assets/web-cafe-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home" className="logo">
        <img src={logo} alt="cup" />
        <div>
          <p>Web</p>
          <span>Cafe</span>
        </div>
      </NavLink>

      <LocationAndCart>
        <div className="location">
          <MapPin size={22} />
          <span>São Paulo, SP</span>
        </div>
        <NavLink to="/checkout" title="checkout">
          <button className="cart">
            <ShoppingCart size={22} />
            <span>1</span>
          </button>
        </NavLink>
      </LocationAndCart>
    </HeaderContainer>
  )
}
