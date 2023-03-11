import { HeaderContainer, LocationAndCart } from './styles'
import logo from '../../assets/web-cafe-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { numberOfItems, isThereItemsInTheChart } = useContext(CartContext)

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
          <span>Los Angeles, CA</span>
        </div>
        <NavLink
          to={isThereItemsInTheChart ? '/checkout' : '/'}
          title="checkout"
        >
          <button className="cart">
            <ShoppingCart size={22} />
            {isThereItemsInTheChart && <span>{numberOfItems}</span>}
          </button>
        </NavLink>
      </LocationAndCart>
    </HeaderContainer>
  )
}
