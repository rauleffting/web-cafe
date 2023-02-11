import {
  CheckoutForm,
  CompleteYourOrderContainer,
  DeliveryContainer,
  SelectedCoffeesContainer,
} from './styles'

import { MapPinLine } from 'phosphor-react'

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
            <input type="text" placeholder="Street" />
            <input type="text" placeholder="Number" />
            <input type="text" placeholder="Complement" />
            <input type="text" placeholder="Neighborhood" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
        </DeliveryContainer>
      </CompleteYourOrderContainer>

      <SelectedCoffeesContainer>
        <h3>Selected coffees</h3>
      </SelectedCoffeesContainer>
    </CheckoutForm>
  )
}
