import React from "react"
import styled from "styled-components"

import LogoWhite from "../Logos/LogoWhite"

const FooterLogo = styled.div`
  width: 100%;
  margin: auto;

  @media (min-width: 1025px) {
  }
`

const FooterLeftLogo = () => {
  return (
    <FooterLogo>
      <LogoWhite />
    </FooterLogo>
  )
}

export default FooterLeftLogo
