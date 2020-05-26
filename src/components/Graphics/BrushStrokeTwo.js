import React from "react"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const BrushStrokeStyles = styled(BgImg)`
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
    brushStroke: file(relativePath: { eq: "brush-stroke-2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BrushStrokeTwo = props => {
  const data = useStaticQuery(getData)
  const imageData = data.brushStroke.childImageSharp.fluid
  return (
    <BrushStrokeStyles Tag="div" fluid={imageData}>
      {props.children}
    </BrushStrokeStyles>
  )
}

export default BrushStrokeTwo
