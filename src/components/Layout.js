import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Donate from "./modals/Donate"
import MobileNav from "./MobileNav/MobileNav"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const SiteWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${props => (props.isActive ? "filter: blur(5px) grayscale(50%);" : null)};
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isActive, setIsActive] = useState(false)
  const handelModalState = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Donate isActive={isActive} handleModalState={handelModalState} />
        <SiteWrapper isActive={isActive}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={location}
            handleModalState={handelModalState}
            isActive={isActive}
          />
          <MobileNav handleModalState={handelModalState} />
          <main>{children}</main>
          <Footer handleModalState={handelModalState} />
        </SiteWrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
