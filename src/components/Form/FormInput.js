import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const InputStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 2.5rem;

  label {
    width: calc(25%);
    margin: 0;
    padding: 1.25rem 0;
    transition: all 0.3s ease-in;
    background: ${props =>
      props.isFocused ? colors.colorSecondary : colors.colorTertiary};
    color: ${props => (props.isFocused ? colors.colorPrimary : colors.white)};
    text-align: center;
  }

  input {
    width: calc(75%);
    margin: 0;
    padding: 1.25rem;
    transition: all 0.3s ease-in;

    &:focus {
      outline-color: ${colors.colorSecondary};
      outline-style: solid;
      outline-width: 0.25rem;
    }
  }
`

const FormInput = ({ label, name, id, type, value, handleOnChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(!isFocused)
  }
  return (
    <InputStyled isFocused={isFocused}>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={e => handleOnChange(e)}
        onFocus={handleOnFocus}
        onBlur={handleOnFocus}
      />
    </InputStyled>
  )
}

export default FormInput
