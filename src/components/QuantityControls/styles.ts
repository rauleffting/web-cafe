import styled from 'styled-components'

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
