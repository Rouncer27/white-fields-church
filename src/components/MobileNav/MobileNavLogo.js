import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoBlue from "../Logos/LogoBlue"

const NavLogo = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 2rem auto 4rem;
`

const MobileNavLogo = () => {
  return (
    <NavLogo>
      <Link to="/">
        <LogoBlue />
      </Link>
    </NavLogo>
  )
}

export default MobileNavLogo
