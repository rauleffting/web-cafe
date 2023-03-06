import { CardContainer, CardFooter } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

/** Interfaces and Context */
import { Items, CartItems, CartContext } from '../../../../contexts/CartContext'
import { useContext, useState } from 'react'

interface CardProps {
  item: Items
}

export function Card({ item }: CardProps) {
  const { handleAddToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  function handleSum() {
    setQuantity(quantity + 1)
  }

  function handleSub() {
    const newQuantity = quantity - 1
    newQuantity <= 1 ? setQuantity(1) : setQuantity(newQuantity)
  }

  function handleAdd() {
    const newCartItem: CartItems = {
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.price,
      types: item.types,
      quantity,
    }

    handleAddToCart(newCartItem)
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
          <button className="cart-button" onClick={handleAdd}>
            <ShoppingCart size={22} />
          </button>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
