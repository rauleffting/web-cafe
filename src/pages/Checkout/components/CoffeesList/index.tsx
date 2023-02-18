import { CoffeesListContainer } from './styles'

import traditionalEspresso from '../../../../assets/traditional-espresso.svg'

export function CoffeesList() {
  return (
    <CoffeesListContainer>
      <img src={traditionalEspresso} alt="A cup of coffee" />
      <div className="name-quantity-remove-wrapper">
        <span>Traditional Espresso</span>

        <div className="buttons-wrapper">
          <div className="quantity-wrapper">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <button>Remove</button>
        </div>
      </div>

      <span>$ 9,90</span>
    </CoffeesListContainer>
  )
}
