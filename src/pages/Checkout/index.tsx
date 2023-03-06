import { useNavigate } from 'react-router-dom'

import {
  CheckoutForm,
  CompleteYourOrderContainer,
  ConfirmButton,
  DeliveryContainer,
  InfoLine,
  SelectedCoffeesContainer,
  Total,
} from './styles'

import dolarIcon from './assets/dolarIcon.svg'
import { CreditCard, MapPinLine, Money } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { cartItems } = useContext(CartContext)

  const total: number = cartItems.reduce(
    (total, item) => (total += item.quantity * Number(item.price)),
    0,
  )

  const navigate = useNavigate()

  function handleConfirmOrder() {
    navigate('/confirmation')
  }

  return (
    <CheckoutForm>
      <CompleteYourOrderContainer>
        <h3>Complete your order</h3>
        <DeliveryContainer>
          <div className="delivery-container-header-wrapper">
            <MapPinLine size={22} />
            <div>
              <p>Delivery address</p>
              <span>
                Enter the address where you want to receive your order
              </span>
            </div>
          </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Street" className="street-input" />

            <div className="number-complement-input-wrapper">
              <input type="text" placeholder="Number" />
              <input
                type="text"
                placeholder="Complement"
                className="complement-input"
              />
            </div>

            <div className="neighborhood-city-state-input-wrapper">
              <input type="text" placeholder="Neighborhood" />
              <input type="text" placeholder="City" className="city-input" />
              <input type="text" placeholder="FS" className="state-input" />
            </div>
          </div>
        </DeliveryContainer>
        <DeliveryContainer>
          <div className="delivery-container-header-wrapper">
            <img src={dolarIcon} width="22" height="22" alt="" />
            <div>
              <p>Payment</p>
              <span>
                Payment is made on delivery. Choose the way you want to pay
              </span>
            </div>
          </div>
          <div className="payment-method-wrapper">
            <button className="selected-button">
              <CreditCard size={16} />
              <span>Credit Card</span>
            </button>
            <button>
              <Money size={16} />
              <span>Cash</span>
            </button>
          </div>
        </DeliveryContainer>
      </CompleteYourOrderContainer>

      <SelectedCoffeesContainer>
        <h3>Selected coffees</h3>
        <div className="order-container">
          {cartItems.map((item) => (
            <CoffeeItem key={item.name} item={item} />
          ))}

          <div className="info-lines">
            <InfoLine>
              <p>Total items</p>
              <span>$ {total.toFixed(2)}</span>
            </InfoLine>
            <InfoLine>
              <p>Delivery fee</p>
              <span>$ 3.00</span>
            </InfoLine>
            <Total>
              <p>Total</p>
              <span>$ {(total + 3).toFixed(2)}</span>
            </Total>
          </div>

          <ConfirmButton onClick={handleConfirmOrder}>
            <span>Confirm order</span>
          </ConfirmButton>
        </div>
      </SelectedCoffeesContainer>
    </CheckoutForm>
  )
}
