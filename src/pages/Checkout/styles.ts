import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: left;
  gap: 2rem;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`

export const CompleteYourOrderContainer = styled.div`
  max-width: 40rem;

  h3 {
    margin-bottom: 1rem;
  }
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
      border: 1px solid ${(props) => props.theme['gray-400']};
      border-radius: 4px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      width: 12.5rem;
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

    > div {
      display: flex;
      align-items: center;
      min-width: 11rem;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme['gray-400']};

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
  }
`

export const SelectedCoffeesContainer = styled.div`
  max-width: 28rem;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 6px 44px;

    background-color: ${(props) => props.theme['gray-200']};
  }
`
