import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Play from "../Icons/Play"
import Gift from "../Icons/Gift"
import Contact from "../Icons/Contact"
import { colors } from "../../styles/helpers"

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

const TopDiv = styled.div`
  background-color: ${props =>
    props.active ? colors.colorPrimary : "transparent"};

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

const HeaderTopNav = ({ handleModalState, location, isActive }) => {
  useEffect(() => {
    // if (window !== undefined) {
    //   const script = document.createElement("script")
    //   script.type = "text/javascript"
    //   script.src =
    //     "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js"
    //   script.onload = function () {
    //     window.subsplashEmbed(
    //       "+t639/ap",
    //       "https://subsplash.com/",
    //       "subsplash-embed-t639"
    //     )
    //   }
    //   document.body.appendChild(script)
    // }
  }, [])

  return (
    <TopNav>
      <TopDiv>
        <div id="subsplash-embed-t639" />
      </TopDiv>
      <TopDiv active={location.pathname === "/live-feed" ? true : undefined}>
        <Link to="/live-feed">
          <span>
            <Play />
          </span>
        </Link>
      </TopDiv>
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
