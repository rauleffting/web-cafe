import {
  ConfirmationContainer,
  TextContainer,
  Info,
  ImageContainer,
} from './styles'
import clock from './assets/clock.svg'
import dolar from './assets/dolar.svg'
import location from './assets/location.svg'
import confirmationBanner from './assets/confirmation-banner.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Confirmation() {
  const { order } = useContext(CartContext)

  return (
    <ConfirmationContainer>
      <TextContainer>
        <div className="titles">
          <h3>Order confirmed!</h3>
          <p>Now relax and wait for the coffee to arrive!</p>
        </div>
        <div className="order-info-container">
          <Info>
            <img src={location} alt="location-icon" />
            <div className="text-wrapper">
              <p>
                Delivery at{' '}
                <strong>
                  {order.street}, {order.number}
                </strong>
              </p>
              <p>
                {order.neighborhood} - {order.city}, {order.st}
              </p>
            </div>
          </Info>
          <Info>
            <img src={clock} alt="clock-icon" />
            <div className="text-wrapper">
              <p>Delivery forecast</p>
              <p>
                <strong>20 minutes</strong>
              </p>
            </div>
          </Info>
          <Info>
            <img src={dolar} alt="dolar-icon" />
            <div className="text-wrapper">
              <p>Payment method</p>
              <p>
                <strong>{order.paymentMethod}</strong>
              </p>
            </div>
          </Info>
        </div>
      </TextContainer>
      <ImageContainer>
        <img src={confirmationBanner} alt="delivery man riding on motorcycle" />
      </ImageContainer>
    </ConfirmationContainer>
  )
}
