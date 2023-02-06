import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 10rem;

  background: ${(props) => props.theme['gray-100']};
  overflow: auto;
`
