import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const TextareaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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

  textarea {
    width: calc(100%);
    margin: 0;
    padding: 1.25rem;
    border-color: rgba(210, 210, 210, 1);
    transition: all 0.3s ease-in;

    &:focus {
      outline-color: ${colors.colorSecondary};
      outline-style: solid;
      outline-width: 0.25rem;
    }
  }
`

const FormTextarea = ({ label, name, id, rows, value, handleOnChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(!isFocused)
  }
  return (
    <TextareaStyled isFocused={isFocused}>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={e => handleOnChange(e)}
        onFocus={handleOnFocus}
        onBlur={handleOnFocus}
      ></textarea>
    </TextareaStyled>
  )
}

export default FormTextarea
