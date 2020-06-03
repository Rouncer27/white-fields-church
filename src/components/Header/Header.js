import React from "react"
import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = ({ siteTitle, location, handleModalState, isActive }) => {
  return (
    <header>
      <HeaderTop
        siteTitle={siteTitle}
        handleModalState={handleModalState}
        location={location}
        isActive={isActive}
      />
      <HeaderBottom location={location} />
    </header>
  )
}

export default Header
