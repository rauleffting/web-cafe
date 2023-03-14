import styled from 'styled-components'

export const CartContainer = styled.div`
  min-width: 28rem;

  .content {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 1.5rem;
    border-radius: 6px 44px;

    background-color: ${(props) => props.theme['gray-200']};
  }

  .info-lines {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};

  > p {
    font-size: 0.875rem;
    line-height: 130%;
  }

  > span {
    font-size: 1rem;
    line-height: 130%;
  }
`

export const Total = styled(InfoLine)`
  color: ${(props) => props.theme['gray-800']};

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-500']};

  > span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme.white};
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
