import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme['gray-400']};

  .image {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  .name-quantity-remove-wrapper {
    margin-right: 3.125rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > span {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
    }
  }

  .buttons-wrapper {
    display: flex;
    gap: 0.5rem;
  }

  .button-remove {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    height: 2.375rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400']};

    > svg {
      color: ${(props) => props.theme['purple-500']};
    }

    > span {
      text-transform: uppercase;
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 160%;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  .button-remove:hover {
    background-color: ${(props) => props.theme['gray-500']};
    cursor: pointer;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const QuantityControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.375rem;
  width: 4.5rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']};

  > button {
    display: flex;
    align-items: center;
    background: none;
    color: ${(props) => props.theme['purple-500']};
  }

  > button:hover {
    cursor: pointer;
    background: none;
    color: ${(props) => props.theme['purple-700']};
  }
`
