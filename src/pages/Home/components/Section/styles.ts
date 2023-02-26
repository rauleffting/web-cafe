import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
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

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  row-gap: 2.5rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  position: relative;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;

  > img {
    position: absolute;
    top: -20px;
  }

  .types-wrapper {
    margin: 7rem 0 1rem;

    > span {
      border-radius: 100px;
      padding: 0.25rem 0.5rem;

      background-color: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};

      font-style: normal;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;
      text-transform: uppercase;
    }
  }

  > h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;

    color: ${(props) => props.theme['gray-600']};

    line-height: 130%;
    text-align: center;
    padding: 0 1.25rem;
    margin-bottom: 2rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4375rem;
  width: 100%;
  margin: 0 1.5rem 1.25rem;

  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .price {
    color: ${(props) => props.theme['gray-700']};

    > span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.1375rem;
    }

    > strong {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
    }
  }

  .cart-button {
    background-color: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};

    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;
  }

  .cart-button:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['purple-500']};
  }
`
