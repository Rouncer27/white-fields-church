import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const QuoteNowWhatWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    quote: file(relativePath: { eq: "quote-now-what.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 925) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const QuoteNowWhat = () => {
  const data = useStaticQuery(getData)
  const imageData = data.quote.childImageSharp.fluid
  return (
    <QuoteNowWhatWrap>
      <Img fluid={imageData} alt="White Fields Calvary Church - Now What" />
    </QuoteNowWhatWrap>
  )
}

export default QuoteNowWhat
