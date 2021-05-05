import React from "react"
import styled from "styled-components"
import { footerType } from "../../styles/helpers"

const LeftDetails = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: rgba(255, 255, 255, 0.5) solid 0.25rem;
  text-align: right;

  p,
  a {
    ${footerType};
    margin: 0;
    padding: 0;
  }

  p {
    margin-bottom: 0.25rem;
  }
`

const FooterLeftDetails = () => {
  return (
    <LeftDetails>
      <div>
        <p>
          Phone: <a href="tel:+1587-997-4886">(587) 997-4886</a>
        </p>
        <p>
          Email: <a href="mailto: admin@whitefields.ca">admin@whitefields.ca</a>
        </p>
        <p>
          White Fields Ministry Centre and Office{" "}
          <span>111, 2966 Main St. South </span>
          <span>Airdrie, T4B 3G4</span>
        </p>
      </div>
    </LeftDetails>
  )
}

export default FooterLeftDetails
