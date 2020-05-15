import React, { useState } from "react"
import styled from "styled-components"

import MobileNavButton from "./MobileNavButton"
import MobileNavDrawer from "./MobileNavDrawer"

const MobileNavSection = styled.div`
  position: relative;
  left: -999999999999999px;
  width: 0;
  height: 0;
  @media (min-width: 768px) {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MobileNavButton toggleDrawer={handleToggleDrawer} isOpen={isOpen} />
      <MobileNavDrawer isOpen={isOpen} />
    </>
  )
}

export default MobileNav
