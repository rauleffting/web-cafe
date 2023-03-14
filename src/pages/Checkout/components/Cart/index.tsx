import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeItem } from './components/CoffeeItem'
import { CartContainer, InfoLine, Total, ConfirmButton } from './styles'

export function Cart({ isSubmitDisabled }: any) {
  const { cartItems, isThereItemsInTheChart } = useContext(CartContext)

  const total: number = cartItems.reduce(
    (total, item) => (total += item.quantity * item.price),
    0,
  )

  return (
    <CartContainer>
      <h3>Selected coffees</h3>
      <div className="content">
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

        <ConfirmButton
          disabled={isSubmitDisabled || !isThereItemsInTheChart}
          type="submit"
        >
          <span>Confirm order</span>
        </ConfirmButton>
      </div>
    </CartContainer>
  )
}
