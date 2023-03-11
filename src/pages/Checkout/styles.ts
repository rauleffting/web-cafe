import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: left;
  gap: 2rem;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }
`

export const CompleteYourOrderContainer = styled.div`
  max-width: 40rem;
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  width: 40rem;

  background-color: ${(props) => props.theme['gray-200']};

  .delivery-container-header-wrapper {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-700']};
    }

    p {
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme['gray-800']};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme['gray-700']};
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;

    input {
      background-color: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-700']};
      border: 1px solid ${(props) => props.theme['gray-400']};
      border-radius: 4px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      width: 12.5rem;
    }

    input::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${(props) => props.theme['gray-600']};
      opacity: 1; /* Firefox */
    }

    input[type='text']:focus {
      border: 1px solid ${(props) => props.theme['yellow-700']};
      outline: none;
    }

    .street-input {
      width: 100%;
    }

    .number-complement-input-wrapper {
      display: flex;
      gap: 0.75rem;

      .complement-input {
        width: 100%;
      }
    }

    .neighborhood-city-state-input-wrapper {
      display: flex;
      gap: 0.75rem;

      .city-input {
        width: 100%;
      }

      .state-input {
        max-width: 3.75rem;
      }
    }
  }

  .payment-method-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > label {
      display: flex;
      align-items: center;
      min-width: 11rem;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme['gray-400']};

      input[type='radio'] {
        visibility: hidden;
        height: 0;
        width: 0;
      }

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme['gray-500']};
      }

      svg {
        color: ${(props) => props.theme['purple-500']};
      }

      span {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;

        color: ${(props) => props.theme['gray-700']};
      }
    }

    .selected-input {
      background-color: ${(props) => props.theme['purple-300']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }
  }
`

export const SelectedCoffeesContainer = styled.div`
  min-width: 28rem;

  .order-container {
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
