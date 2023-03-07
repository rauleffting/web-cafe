import { CoffeeItemContainer, QuantityControlsContainer } from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'

import { CartItems, CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CoffeeItemProps {
  item: CartItems
}

export function CoffeeItem({ item }: CoffeeItemProps) {
  const { handleSum, handleSub, handleRemove } = useContext(CartContext)

  return (
    <CoffeeItemContainer>
      <img src={item.image} alt="A cup of coffee" className="image" />
      <div className="name-quantity-remove-wrapper">
        <span>{item.name}</span>

        <div className="buttons-wrapper">
          <QuantityControlsContainer>
            <button
              onClick={
                item.quantity > 1 ? () => handleSub(item.name) : undefined
              }
            >
              <Minus size={14} />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => handleSum(item.name)}>
              <Plus size={14} />
            </button>
          </QuantityControlsContainer>

          <button
            className="button-remove"
            onClick={() => handleRemove(item.name)}
          >
            <Trash size={16} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      <span>$ {(Number(item.price) * item.quantity).toFixed(2)}</span>
    </CoffeeItemContainer>
  )
}
