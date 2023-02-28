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

export function Confirmation() {
  const clientInfo = {
    street: 'Avenida Paulista',
    number: '223',
    city: 'São Paulo',
    fs: 'SP',
    neighborhood: 'Bela Vista',
    paymentMethod: 'Credit Card',
  }

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
                  {clientInfo.street}, {clientInfo.number}
                </strong>
              </p>
              <p>
                {clientInfo.neighborhood} - {clientInfo.city}, {clientInfo.fs}
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
                <strong>{clientInfo.paymentMethod}</strong>
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
