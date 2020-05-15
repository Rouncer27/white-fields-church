import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoBlueWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logoBlue: file(relativePath: { eq: "white-fields-calary-church.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 580) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const LogoBlue = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logoBlue.childImageSharp.fluid
  return (
    <LogoBlueWrap>
      <Img fluid={imageData} alt="White Fields Calvary Church" />
    </LogoBlueWrap>
  )
}

export default LogoBlue
