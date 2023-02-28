import styled from 'styled-components'

export const ConfirmationContainer = styled.main`
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;

  .titles {
    margin-bottom: 2.5rem;

    h3 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      margin-bottom: 0.25rem;

      color: ${(props) => props.theme['yellow-700']};
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      color: ${(props) => props.theme['gray-800']};
    }
  }

  .order-info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    border: 1px solid ${(props) => props.theme['purple-700']};
    border-radius: 6px 36px;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 0.75rem;

  .text-wrapper {
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const TextContainer = styled.div``

export const ImageContainer = styled.div``
