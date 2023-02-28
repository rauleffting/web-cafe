import { CardContainer, CardFooter } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'

/** Interfaces */
import { Items, CartItems } from '../../index'

interface CardProps {
  item: Items
  handleAdd: (item: CartItems) => void
}

export function Card({ item, handleAdd }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)
  function handleSum() {
    setQuantity(quantity + 1)
  }

  function handleSub() {
    const newQuantity = quantity - 1
    newQuantity <= 1 ? setQuantity(1) : setQuantity(newQuantity)
  }
  return (
    <CardContainer key={item.name}>
      <img src={item.image} alt="coffee image" />
      <div className="types-wrapper">
        {item.types.map((type) => {
          return <span key={type}>{type}</span>
        })}
      </div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>

      <CardFooter>
        <div className="price">
          <span>$ </span>
          <strong>{item.price}</strong>
        </div>
        <div className="buttons-wrapper">
          <div className="quantity-controls">
            <button onClick={handleSub}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleSum}>
              <Plus size={14} />
            </button>
          </div>
          <button className="cart-button" onClick={() => {}}>
            <ShoppingCart size={22} />
          </button>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
