import React from "react"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const DoveStyles = styled(BgImg)`
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
    dove: file(relativePath: { eq: "white-fields-church-dove.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Dove = props => {
  const data = useStaticQuery(getData)
  const imageData = data.dove.childImageSharp.fluid
  return (
    <DoveStyles Tag="div" fluid={imageData}>
      {props.children}
    </DoveStyles>
  )
}

export default Dove
