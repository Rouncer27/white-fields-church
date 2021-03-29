import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Play from "../Icons/Play"
import Gift from "../Icons/Gift"
import Contact from "../Icons/Contact"
import Download from "../Icons/Download"
import { buttonOneBlue, buttonOneWhite, colors } from "../../styles/helpers"

const TopNav = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;

  @media (min-width: 768px) {
    width: 30rem;
    margin-top: 0;
  }
`

const TopDivDownload = styled.div`
  width: 100%;
  text-align: center;

  button {
    ${buttonOneWhite};
    margin-top: 2rem;
    margin-bottom: 0;
  }
`

const TopDiv = styled.div`
  background-color: ${props =>
    props.active ? colors.colorPrimary : "transparent"};

  button {
    background: transparent;
    border: none;
    outline: none;
  }

  span {
    display: block;
    padding: 4.5rem 0;

    @media (min-width: 1025px) {
      padding: 4.4rem 0;
    }
  }

  svg {
    path {
      fill: ${props =>
        props.active ? colors.colorSecondary : colors.colorPrimary} !important;
    }
  }
`

const HeaderTopNav = ({
  handleModalState,
  location,
  isActive,
  setAppDownload,
  popactive,
}) => {
  return (
    <TopNav>
      <TopDiv>
        <button onClick={setAppDownload}>
          <span>
            <Download />
          </span>
        </button>
      </TopDiv>
      {/* <TopDiv active={location.pathname === "/live-feed" ? true : undefined}>
        <Link to="/live-feed">
          <span>
            <Play />
          </span>
        </Link>
      </TopDiv> */}
      <TopDiv active={location.pathname === "/contact" ? true : undefined}>
        <Link to="/contact">
          <span>
            <Contact />
          </span>
        </Link>
      </TopDiv>
      <TopDiv active={isActive} onClick={handleModalState}>
        <span>
          <Gift />
        </span>
      </TopDiv>
    </TopNav>
  )
}

export default HeaderTopNav
