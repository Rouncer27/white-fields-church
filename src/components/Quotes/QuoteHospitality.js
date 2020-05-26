import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const QuoteHospitalityWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    quote: file(relativePath: { eq: "quote-hospitality.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const QuoteHospitality = () => {
  const data = useStaticQuery(getData)
  const imageData = data.quote.childImageSharp.fluid
  return (
    <QuoteHospitalityWrap>
      <Img fluid={imageData} alt="White Fields Calvary Church - Hospitality" />
    </QuoteHospitalityWrap>
  )
}

export default QuoteHospitality
