import { CardContainer, CardFooter } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

/** Interfaces and Context */
import { Items, CartItems, CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CardProps {
  item: Items
}

export function Card({ item }: CardProps) {
  const { quantity, handleSum, handleSub, handleAdd } = useContext(CartContext)

  function handleAddToCart() {
    const newCartItem: CartItems = {
      id: item.id,
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.price,
      types: item.types,
      quantity,
    }

    handleAdd(newCartItem)
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
          <button className="cart-button" onClick={handleAddToCart}>
            <ShoppingCart size={22} />
          </button>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
