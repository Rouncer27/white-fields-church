import React from "react"
import TopHeader from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = ({ siteTitle, location }) => {
  return (
    <header>
      <TopHeader siteTitle={siteTitle} />
      <HeaderBottom location={location} />
    </header>
  )
}

export default Header
