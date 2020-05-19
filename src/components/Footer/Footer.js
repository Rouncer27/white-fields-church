import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
import FooterCopy from "./FooterCopy"

import { colors, medWrapper } from "../../styles/helpers"

const FooterSection = styled.footer`
  padding: 2rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
    align-items: center;
    justify-content: space-between;
  }
`

const Footer = () => {
  const swbCred = true
  return (
    <FooterSection>
      <div className="wrapper">
        <FooterLeft />
        <FooterRight />
        <FooterCopy swbCred={swbCred} />
      </div>
    </FooterSection>
  )
}

export default Footer
