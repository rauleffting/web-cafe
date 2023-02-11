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
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

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
`
export const BaseInput = styled.input``

export const SelectedCoffeesContainer = styled.div`
  max-width: 28rem;
`
