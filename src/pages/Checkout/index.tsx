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

import { useForm } from 'react-hook-form'
/** to integrate hookform with zod */
import { zodResolver } from '@hookform/resolvers/zod'
/** to validate forms */
import zod from 'zod'

import dolarIcon from './assets/dolarIcon.svg'
import { CreditCard, MapPinLine, Money } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

const newOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Inform a zip code'),
  street: zod.string().min(1, 'Inform a street'),
  number: zod.string().min(1, 'Inform a number'),
  complement: zod.string().min(0, 'Inform a complement'),
  neighborhood: zod.string().min(1, 'Inform a neighborhood'),
  city: zod.string().min(1, 'Inform a city'),
  st: zod.string().min(1, 'Inform a state'),
  paymentMethod: zod.string(),
  total: zod.number(),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const [selectPaymentMethod, setSelectPaymentMethod] = useState<string>('')
  const { cartItems, createNewOrder } = useContext(CartContext)

  const total: number = cartItems.reduce(
    (total, item) => (total += item.quantity * Number(item.price)),
    0,
  )

  const navigate = useNavigate()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      st: '',
      paymentMethod: '',
      total: total + 3,
    },
  })

  const { register, handleSubmit, watch, reset } = newOrderForm

  const requiredData = watch([
    'zipCode',
    'street',
    'number',
    'neighborhood',
    'city',
    'st',
    'paymentMethod',
  ])

  const isSubmitDisabled = requiredData.includes('')

  function handleSelectPaymentMethod(event: string) {
    setSelectPaymentMethod(event)
  }

  function handleConfirmOrder(data: NewOrderFormData) {
    createNewOrder(data)
    reset() /** to reset the form */
    navigate('/confirmation')
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(handleConfirmOrder)} action="">
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

          <ConfirmButton disabled={isSubmitDisabled} type="submit">
            <span>Confirm order</span>
          </ConfirmButton>
        </div>
      </SelectedCoffeesContainer>
    </CheckoutForm>
  )
}
