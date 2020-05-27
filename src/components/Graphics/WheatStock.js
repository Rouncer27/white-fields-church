import React from "react"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const WheatStockStyles = styled(BgImg)`
  display: flex;
  position: absolute !important;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
`

const getData = graphql`
  {
    wheatStock: file(relativePath: { eq: "wheat-stock.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WheatStock = props => {
  const data = useStaticQuery(getData)
  const imageData = data.wheatStock.childImageSharp.fluid
  return (
    <WheatStockStyles Tag="div" fluid={imageData}>
      {props.children}
    </WheatStockStyles>
  )
}

export default WheatStock
