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
  .test {
    span {
      font-weight: bold;
      font-size: 21;
    }
  }
`

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  row-gap: 2.5rem;
`
