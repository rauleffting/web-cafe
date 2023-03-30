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

  @media (max-width: 1186px) {
    flex-direction: column;
  }
`
