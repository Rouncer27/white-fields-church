import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import LogoBlue from "../Logos/LogoBlue"

const HeaderLogoWrap = styled.div`
  align-self: center;
  width: 25rem;
  padding: 0 2rem;

  @media (min-width: 768px) {
    width: 25rem;
  }

  h1 {
    margin: 0;
    padding: 0;
    span {
      display: block;
      position: absolute;
      left: -999%;
    }
  }
`

const HeaderTopLogo = ({ siteTitle }) => {
  return (
    <HeaderLogoWrap>
      <h1>
        <Link to="/">
          <span>{siteTitle}</span>
          <LogoBlue />
        </Link>
      </h1>
    </HeaderLogoWrap>
  )
}

export default HeaderTopLogo
