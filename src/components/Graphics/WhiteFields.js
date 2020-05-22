import React from "react"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const WhiteFieldsStyles = styled(BgImg)`
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
    whiteFields: file(relativePath: { eq: "white-fields-stroke.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WhiteFields = props => {
  const data = useStaticQuery(getData)
  const imageData = data.whiteFields.childImageSharp.fluid
  return (
    <WhiteFieldsStyles Tag="div" fluid={imageData}>
      {props.children}
    </WhiteFieldsStyles>
  )
}

export default WhiteFields
