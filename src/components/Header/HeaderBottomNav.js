import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import HeaderBottomNavItem from "./HeaderBottomNavItem"

const BottomNav = styled.nav`
  align-self: center;

  @media (min-width: 1025px) {
    margin-right: 4rem;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
`

const getData = graphql`
  {
    mainMenu: wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
      items {
        wordpress_id
        title
        object_slug
        target
        type
        url
        wordpress_children {
          wordpress_id
          title
          object_slug
          url
        }
      }
    }
  }
`

const HeaderBottomNav = ({ location }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mainMenu.items
  return (
    <BottomNav>
      <div>
        <ul>
          {menuItems.length > 0 &&
            menuItems.map(item => (
              <HeaderBottomNavItem
                key={item.object_slug}
                item={item}
                location={location}
              />
            ))}
        </ul>
      </div>
    </BottomNav>
  )
}

export default HeaderBottomNav
