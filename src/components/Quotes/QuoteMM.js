import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const QuoteMMWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    quote: file(relativePath: { eq: "quote-mens-ministries.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 925) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const QuoteMM = () => {
  const data = useStaticQuery(getData)
  const imageData = data.quote.childImageSharp.fluid
  return (
    <QuoteMMWrap>
      <Img
        fluid={imageData}
        alt="White Fields Calvary Church - What We Believe"
      />
    </QuoteMMWrap>
  )
}

export default QuoteMM
