import React from "react"
import styled from "styled-components"

import FooterRightForm from "./FooterRightForm"
import FooterRightSocial from "./FooterRightSocial"
import { bodyCopySemiBold, colors } from "../../styles/helpers"

const FooterRightSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 50rem;
  }

  @media (min-width: 1025px) {
    width: 50%;
    max-width: 50rem;
  }

  .formContainer {
    border-left: rgba(255, 255, 255, 0.5) solid 0.25rem;
    padding-left: 4rem;
  }

  .formMessage {
    text-align: right;

    p {
      ${bodyCopySemiBold};
      margin-bottom: 2rem;
      color: ${colors.white};
    }
  }
`

const FooterRight = () => {
  return (
    <FooterRightSection>
      <div className="formContainer">
        <div className="formMessage">
          <p>
            Stay Connected! Sign up to receive ministry updates, news, and our
            monthly bulletin
          </p>
        </div>
        <div>
          <FooterRightForm />
        </div>
      </div>
      <FooterRightSocial />
    </FooterRightSection>
  )
}

export default FooterRight
