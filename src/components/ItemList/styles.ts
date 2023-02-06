import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding-top: 2rem;
  animation: downtop 1s;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    margin-bottom: 3.375rem;
  }

  @keyframes downtop {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const List = styled.div``

export const Card = styled.div``

export const CardFooter = styled.div`
  display: flex;
  gap: 1.4375rem;

  .counter-cart-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`
