import { CoffeeItemContainer } from './styles'

import traditionalEspresso from '../../../../assets/traditional-espresso.svg'
import { QuantityControls } from '../../../../components/QuantityControls'

import { Trash } from 'phosphor-react'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <img src={traditionalEspresso} alt="A cup of coffee" className="image" />
      <div className="name-quantity-remove-wrapper">
        <span>Traditional Espresso</span>

        <div className="buttons-wrapper">
          <QuantityControls />
          <button className="button-remove">
            <Trash size={16} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      <span>$ 9,90</span>
    </CoffeeItemContainer>
  )
}
