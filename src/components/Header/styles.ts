import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Logo = styled.div`
  display: flex;
  height: 2.5rem;
  gap: 1rem;

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
    white-space: nowrap;

    > img {
      
    }
  }
`
