import dolarIcon from '../../assets/dolarIcon.svg'
import { CreditCard, MapPinLine, Money } from 'phosphor-react'
import { DeliveryFormContainer, InputsContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

export function DeliveryForm() {
  const { register } = useFormContext()
  const [selectPaymentMethod, setSelectPaymentMethod] = useState<string>('')

  function handleSelectPaymentMethod(event: string) {
    setSelectPaymentMethod(event)
  }
  return (
    <DeliveryFormContainer>
      <h3>Complete your order</h3>
      <InputsContainer>
        <div className="inputs-container-header-wrapper">
          <MapPinLine size={22} />
          <div>
            <p>Delivery address</p>
            <span>Enter the address where you want to receive your order</span>
          </div>
        </div>

        <div className="input-wrapper">
          <input
            id="zipCode"
            type="text"
            placeholder="Zip code"
            {...register('zipCode')}
          />
          <input
            id="street"
            type="text"
            placeholder="Street"
            className="street-input"
            {...register('street')}
          />

          <div className="number-complement-input-wrapper">
            <input
              id="number"
              type="text"
              placeholder="Number"
              {...register('number')}
            />
            <input
              id="complement"
              type="text"
              placeholder="Complement"
              className="complement-input"
              {...register('complement')}
            />
          </div>

          <div className="neighborhood-city-state-input-wrapper">
            <input
              id="neighborhood"
              type="text"
              placeholder="Neighborhood"
              {...register('neighborhood')}
            />
            <input
              id="city"
              type="text"
              placeholder="City"
              className="city-input"
              {...register('city')}
            />
            <input
              id="st"
              type="text"
              placeholder="ST"
              className="state-input"
              {...register('st')}
            />
          </div>
        </div>
      </InputsContainer>
      <InputsContainer>
        <div className="inputs-container-header-wrapper">
          <img src={dolarIcon} width="22" height="22" alt="" />
          <div>
            <p>Payment</p>
            <span>
              Payment is made on delivery. Choose the way you want to pay
            </span>
          </div>
        </div>
        <div className="payment-method-wrapper">
          <label
            className={
              selectPaymentMethod === 'Credit Card' ? 'selected-input' : ''
            }
            onClick={() => handleSelectPaymentMethod('Credit Card')}
          >
            <input
              id="paymentMethod"
              type="radio"
              value="Credit Card"
              {...register('paymentMethod')}
            />
            <CreditCard size={16} />
            <span>Credit Card</span>
          </label>

          <label
            className={selectPaymentMethod === 'Cash' ? 'selected-input' : ''}
            onClick={() => handleSelectPaymentMethod('Cash')}
          >
            <input
              id="paymentMethod"
              type="radio"
              value="Cash"
              {...register('paymentMethod')}
            />
            <Money size={16} />
            <span>Cash</span>
          </label>
        </div>
      </InputsContainer>
    </DeliveryFormContainer>
  )
}
