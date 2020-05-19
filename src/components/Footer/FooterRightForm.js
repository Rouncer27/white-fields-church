import React, { useState } from "react"
import styled from "styled-components"

import FormInput from "../Form/FormInput"
import { colors } from "../../styles/helpers"

const FormStyled = styled.form`
  .formBtn {
    margin-bottom: 2.5rem;
    text-align: right;

    button {
      background: transparent;
      transition: all 0.3s ease;
      border-color: transparent;
      border-width: 0px;
      color: ${colors.white};
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: ${colors.colorSecondary};
      }
    }
  }
`

const FooterRightForm = () => {
  const [formField, setFormFeilds] = useState({})

  const handleFieldChange = e => {
    setFormFeilds({ ...formField, [e.target.name]: e.target.value })
  }

  return (
    <FormStyled
      onSubmit={() => {
        console.log("yo!")
      }}
    >
      <FormInput
        label="Name"
        name="name"
        id="name"
        type="text"
        value={formField.name ? formField.name : ""}
        handleOnChange={handleFieldChange}
      />

      <FormInput
        label="Email"
        name="email"
        id="email"
        type="email"
        value={formField.email ? formField.email : ""}
        handleOnChange={handleFieldChange}
      />

      <div className="formBtn">
        <button>Submit</button>
      </div>
    </FormStyled>
  )
}

export default FooterRightForm
