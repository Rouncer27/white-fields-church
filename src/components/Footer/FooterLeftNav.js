import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { footerTypeSemiBold } from "../../styles/helpers"

const FooterNav = styled.div`
  align-self: center;

  li {
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;

    a,
    button {
      ${footerTypeSemiBold};
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`

const FooterLeftNav = ({ handleModalState }) => {
  return (
    <FooterNav>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <button onClick={handleModalState}>Donate Online</button>
        </li>
        <li>
          <Link to="/live-feed">Listen Online</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </FooterNav>
  )
}

export default FooterLeftNav
