import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { createSlug } from "../../utils/helperFunc"
import { navOne, colors } from "../../styles/helpers"

const NavItem = styled.li`
  margin: 0;

  a {
    ${navOne};
    display: block;
    padding: 2rem;
    background-color: ${props =>
      props.current ? colors.colorPrimary : "transparent"};
    color: ${props =>
      props.current ? colors.colorSecondary : colors.colorPrimary};
    text-transform: uppercase;

    &:hover {
      color: ${props =>
        props.current ? colors.colorSecondary : colors.colorTertiary};
      cursor: ${props => (props.current ? "default" : "pointer")};
      background-color: ${props =>
        props.current ? colors.colorPrimary : colors.colorPrimary};
    }
  }
`

const HeaderBottomNavItem = ({ item, location }) => {
  const slug = createSlug(item.url)
  const current = location.pathname.split("/").join("") === slug ? true : false
  return (
    <NavItem current={current}>
      <Link to={`/${slug}`}>{item.title}</Link>
    </NavItem>
  )
}

export default HeaderBottomNavItem
