import React from "react"
import styled from "styled-components"

import FooterRightForm from "./FooterRightForm"
import FooterRightSocial from "./FooterRightSocial"
import { B2OpenSansWhiteBold, buttonOneWhite } from "../../styles/helpers"

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
      ${B2OpenSansWhiteBold};
      margin-bottom: 2rem;
    }
  }

  .newsletterBtn {
    text-align: right;
    margin-bottom: 2rem;

    a {
      ${buttonOneWhite};
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
        <div className="newsletterBtn">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://eepurl.com/TYNPD"
          >
            Newsletter Signup
          </a>
        </div>
      </div>
      <FooterRightSocial />
    </FooterRightSection>
  )
}

export default FooterRight
