import React from "react"
import styled from "styled-components"

import HeaderTopLogo from "./HeaderTopLogo"
import HeaderTopNav from "./HeaderTopNav"

import { colors, medWrapper } from "../../styles/helpers"

const TopHeaderSec = styled.div`
  position: relative;
  background-color: ${colors.colorSecondary};
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.2);
  z-index: 10;

  .wrapper {
    ${medWrapper};
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: space-between;
    }

    @media (min-width: 1025px) {
      padding: 0 5rem;
    }
  }
`

const HeaderTop = ({
  siteTitle,
  handleModalState,
  location,
  isActive,
  setAppDownload,
  popactive,
}) => {
  return (
    <TopHeaderSec>
      <div className="wrapper">
        <HeaderTopLogo siteTitle={siteTitle} />
        <HeaderTopNav
          handleModalState={handleModalState}
          location={location}
          isActive={isActive}
          setAppDownload={setAppDownload}
          popactive={popactive}
        />
      </div>
    </TopHeaderSec>
  )
}

export default HeaderTop
