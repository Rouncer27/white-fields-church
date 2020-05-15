import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { createSlug } from "../../utils/helperFunc"
import { navOne } from "../../styles/helpers"

const NavItem = styled.li`
  margin: 0 2rem;

  a {
    ${navOne};
    text-transform: uppercase;
  }
`

const HeaderBottomNavItem = ({ item }) => {
  const slug = createSlug(item.url)
  return (
    <NavItem>
      <Link to={slug}>{item.title}</Link>
    </NavItem>
  )
}

export default HeaderBottomNavItem
