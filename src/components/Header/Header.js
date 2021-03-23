import React from "react"
import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = ({
  siteTitle,
  location,
  handleModalState,
  isActive,
  setAppDownload,
  popactive,
}) => {
  return (
    <header>
      <HeaderTop
        siteTitle={siteTitle}
        handleModalState={handleModalState}
        location={location}
        isActive={isActive}
        setAppDownload={setAppDownload}
        popactive={popactive}
      />
      <HeaderBottom location={location} />
    </header>
  )
}

export default Header
