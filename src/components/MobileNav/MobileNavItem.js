import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const NavItem = styled.li`
  position: relative;
  width: 100%;
  align-self: center;
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;

  a {
    display: block;
    padding: 1rem 2rem;
    font-size: 1.8rem;
    border-bottom: 0.15rem solid ${colors.white};

    &:hover {
      color: ${props => props.theme.colorSecondary};
    }
  }
`

const MobileNavItem = ({ item }) => {
  return (
    <NavItem>
      <Link to={`/${item.object_slug}`}>{item.title}</Link>
    </NavItem>
  )
}

export default MobileNavItem
