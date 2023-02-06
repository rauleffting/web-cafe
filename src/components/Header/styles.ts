import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Logo = styled.div`
  display: flex;
  height: 2.5rem;
  gap: 0.25rem;
  cursor: pointer;

  img {
    height: 2.5rem;
    width: 2.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: Left;
    justify-content: center;
  }

  p {
    color: ${(props) => props.theme['gray-900']};
    font-weight: bold;
    font-size: 1.375rem;
  }

  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.375rem;
    line-height: 50%;
  }
`

export const LocationAndCart = styled.div`
  display: flex;
  gap: 1.25rem;

  .location {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 6px;

    white-space: nowrap;
    background-color: ${(props) => props.theme['purple-300']};

    svg {
      color: ${(props) => props.theme['purple-700']};
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['purple-700']};
    }
  }

  .cart {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-300']};
    position: relative;

    svg {
      color: ${(props) => props.theme['yellow-700']};
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      text-align: center;

      background-color: ${(props) => props.theme['yellow-700']};

      position: absolute;
      top: -10px;
      right: -10px;

      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 130%;
      color: ${(props) => props.theme.white};
    }
  }

  .cart:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
