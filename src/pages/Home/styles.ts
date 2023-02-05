import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 5.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    margin-bottom: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 4.125rem;
  }

  .left-content-wrapper {
    animation: leftright 1s;
  }

  .left-small-content-wrapper {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
  }

  .phrases-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    align-items: center;
    margin-bottom: 1.25rem;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};
  }

  .right-content-wrapper {
    animation: rightleft 1s;
  }

  @keyframes leftright {
    0% {
      opacity: 0;
      transform: translateX(-60px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes rightleft {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
