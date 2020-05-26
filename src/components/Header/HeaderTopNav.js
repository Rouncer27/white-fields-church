import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Play from "../Icons/Play"
import Gift from "../Icons/Gift"
import Contact from "../Icons/Contact"

const TopNav = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;

  @media (min-width: 768px) {
    width: 30rem;
    margin-top: 0;
  }
`

const HeaderTopNav = ({ handleModalState }) => {
  return (
    <TopNav>
      <Link to="/">
        <Play />
      </Link>
      <div onClick={handleModalState}>
        <Gift />
      </div>
      <Link to="/contact">
        <Contact />
      </Link>
    </TopNav>
  )
}

export default HeaderTopNav
