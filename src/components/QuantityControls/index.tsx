import { QuantityControlsContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function QuantityControls() {
  return (
    <QuantityControlsContainer>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </QuantityControlsContainer>
  )
}
