import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
import FooterCopy from "./FooterCopy"

import { colors, medWrapper } from "../../styles/helpers"
import WhiteFields from "../Graphics/WhiteFields"

const FooterSection = styled.footer`
  position: relative;
  padding: 2rem 0;
  background-color: ${colors.colorPrimary};
  overflow: hidden;

  .wrapper {
    ${medWrapper};
    position: relative;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }

  .footerGraphic {
    position: absolute;
    bottom: -10rem;
    right: auto;
    left: 10rem;
    width: 88.5rem;
    height: 22.2rem;
    transform: rotate(-90deg);
    transform-origin: center left;
    z-index: 1;

    @media (min-width: 768px) {
      bottom: -2.5rem;
      right: 2.5%;
      left: auto;
      transform: rotate(0deg);
    }
  }
`

const Footer = ({ handleModalState, setAppDownload }) => {
  const swbCred = true
  return (
    <FooterSection>
      <div className="wrapper">
        <FooterLeft
          handleModalState={handleModalState}
          setAppDownload={setAppDownload}
        />
        <FooterRight />
        <FooterCopy swbCred={swbCred} />
      </div>
      <div className="footerGraphic">
        <WhiteFields />
      </div>
    </FooterSection>
  )
}

export default Footer
