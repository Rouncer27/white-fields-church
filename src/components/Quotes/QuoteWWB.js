import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const WhatWeBelieveWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logoBlue: file(relativePath: { eq: "what-we-believe-quote.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 925) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const QuoteWWB = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logoBlue.childImageSharp.fluid
  return (
    <WhatWeBelieveWrap>
      <Img
        fluid={imageData}
        alt="White Fields Calvary Church - What We Believe"
      />
    </WhatWeBelieveWrap>
  )
}

export default QuoteWWB
