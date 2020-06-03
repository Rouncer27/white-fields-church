import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { createSlug } from "../../utils/helperFunc"
import { navOne, colors, fontSizer } from "../../styles/helpers"

const NavItem = styled.li`
  position: relative;
  margin: 0;

  a {
    ${navOne};
    display: block;
    padding: 2rem;
    background-color: ${props =>
      props.current || props.isActive ? colors.colorPrimary : "transparent"};
    color: ${props =>
      props.current || props.isActive
        ? colors.colorSecondary
        : colors.colorPrimary};
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

const SubMenu = styled.ul`
  flex-wrap: wrap !important;
  position: absolute;
  top: 100%;
  left: 0;
  width: 20rem;
  padding: 1rem;
  background-color: ${colors.colorPrimary};
  transition: all 0.3s ease-in;
  opacity: ${props => (props.isActive ? "1" : "0")};
  visibility: ${props => (props.isActive ? "visible" : "hidden")};

  li {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;

    a.subLink {
      ${navOne};
      ${fontSizer(1.2, 1.2, 76.8, 150, 1.8)};
      display: block;
      width: 100%;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      padding: 0;
      color: ${colors.colorSecondary};

      &:hover {
        cursor: pointer;
      }
    }
  }
`

const HeaderBottomNavItem = ({ item, location }) => {
  const slug = createSlug(item.url)
  const current = location.pathname.split("/").join("") === slug ? true : false
  const subMenu = item.wordpress_children ? item.wordpress_children : false
  const [isActive, setIsActive] = useState(false)
  const handleIsActiveOn = () => {
    setIsActive(true)
  }
  const handleIsActiveOff = () => {
    setIsActive(false)
  }
  return (
    <NavItem isActive={isActive} current={current}>
      <Link
        onMouseEnter={handleIsActiveOn}
        onMouseLeave={handleIsActiveOff}
        to={`/${slug}`}
      >
        {item.title}
      </Link>
      {subMenu && (
        <SubMenu
          isActive={isActive}
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
        >
          {subMenu.map(subItem => {
            return (
              <li key={subItem.wordpress_id}>
                <Link className="subLink" to={subItem.url}>
                  {subItem.title}
                </Link>
              </li>
            )
          })}
        </SubMenu>
      )}
    </NavItem>
  )
}

export default HeaderBottomNavItem
