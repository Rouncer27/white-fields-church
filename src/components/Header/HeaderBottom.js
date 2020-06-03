import React from "react"
import styled from "styled-components"
import { medWrapper, colors } from "../../styles/helpers"

import HeaderBottomNav from "./HeaderBottomNav"

const HeaderBottomSec = styled.div`
  display: none;
  position: relative;
  background-color: ${colors.colorAccent};
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.2);
  z-index: 9999999999999999999;

  @media (min-width: 768px) {
    display: block;
  }

  .wrapper {
    ${medWrapper}

    @media (min-width: 768px) {
      justify-content: flex-end;
      padding: 0 2rem;
    }

    @media (min-width: 1025px) {
      padding: 0 5rem;
    }
  }
`

const HeaderBottom = ({ location }) => {
  return (
    <HeaderBottomSec>
      <div className="wrapper">
        <HeaderBottomNav location={location} />
      </div>
    </HeaderBottomSec>
  )
}

export default HeaderBottom
