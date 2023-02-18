import {
  CheckoutForm,
  CompleteYourOrderContainer,
  DeliveryContainer,
  SelectedCoffeesContainer,
} from './styles'

import { CreditCard, MapPinLine, Money } from 'phosphor-react'
import dolarIcon from './assets/dolarIcon.svg'
import { CoffeesList } from './components/CoffeesList'

export function Checkout() {
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
            <div>
              <CreditCard size={16} />
              <span>Credit Card</span>
            </div>
            <div>
              <Money size={16} />
              <span>Cash</span>
            </div>
          </div>
        </DeliveryContainer>
      </CompleteYourOrderContainer>

      <SelectedCoffeesContainer>
        <h3>Selected coffees</h3>
        <div className="content-wrapper">
          <CoffeesList />
        </div>
      </SelectedCoffeesContainer>
    </CheckoutForm>
  )
}
