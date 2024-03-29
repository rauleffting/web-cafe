import styled from 'styled-components'

export const DeliveryFormContainer = styled.div`
  max-width: 40rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  width: 40rem;

  background-color: ${(props) => props.theme['gray-200']};

  .inputs-container-header-wrapper {
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

  .input-wrapper {
    display: flex;
    flex-direction: column;

    input {
      background-color: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-700']};
      border: 1px solid ${(props) => props.theme['gray-400']};
      border-radius: 4px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      width: 12.5rem;
    }

    input::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${(props) => props.theme['gray-600']};
      opacity: 1; /* Firefox */
    }

    input[type='text']:focus {
      border: 1px solid ${(props) => props.theme['yellow-700']};
      outline: none;
    }

    .street-input {
      width: 100%;
    }

    .number-complement-input-wrapper {
      display: flex;
      gap: 0.75rem;

      .complement-input {
        width: 100%;
      }
    }

    .neighborhood-city-state-input-wrapper {
      display: flex;
      gap: 0.75rem;

      .city-input {
        width: 100%;
      }

      .state-input {
        width: 3.75rem;
      }
    }
  }

  .payment-method-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > label {
      display: flex;
      align-items: center;
      min-width: 11rem;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme['gray-400']};

      input[type='radio'] {
        visibility: hidden;
        height: 0;
        width: 0;
      }

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme['gray-500']};
      }

      svg {
        color: ${(props) => props.theme['purple-500']};
      }

      span {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;

        color: ${(props) => props.theme['gray-700']};
      }
    }

    .selected-input {
      background-color: ${(props) => props.theme['purple-300']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }
  }

  @media (max-width: 1186px) {
    width: 100%;

    .input-wrapper {
      input {
        width: 100%;
      }

      .number-complement-input-wrapper {
        flex-direction: column;
        gap: 0;

        .complement-input {
          width: 100%;
        }
      }

      .neighborhood-city-state-input-wrapper {
        flex-direction: column;
        gap: 0;

        input {
          width: 100%;
        }

        .state-input {
          width: 100%;
        }
      }
    }

    .payment-method-wrapper {
      display: block;
      label:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`
