import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoWhiteWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logoWhite: file(
      relativePath: { eq: "white-fields-calary-church-white.png" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const LogoWhite = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logoWhite.childImageSharp.fluid
  return (
    <LogoWhiteWrap>
      <Img fluid={imageData} alt="White Fields Calvary Church" />
    </LogoWhiteWrap>
  )
}

export default LogoWhite
