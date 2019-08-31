import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  width: 36%;
  margin: auto;
  text-align: center;
  justify-items: center;

  @media (max-width: 768px) {
    width: 70%;
  }
`

export const Input = styled.input`
  height: 44px;
  max-width: 350px;
  width: 100%;
  padding-left: 0.5rem;
  box-sizing: content-box;
  font-family: 'Open Sans', sans-serif;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  box-shadow: 2px 2px 0 #000;

  &[type='submit'] {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`
