import React from "react"
import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = ({ siteTitle, location, handleModalState }) => {
  return (
    <header>
      <HeaderTop siteTitle={siteTitle} handleModalState={handleModalState} />
      <HeaderBottom location={location} />
    </header>
  )
}

export default Header
