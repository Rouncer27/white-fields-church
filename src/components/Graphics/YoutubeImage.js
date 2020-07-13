import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const YoutubeImageStyles = styled.div``

const getData = graphql`
  {
    youtubeImage: file(relativePath: { eq: "WFC-youtube-feed-min.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const YoutubeImage = props => {
  const data = useStaticQuery(getData)
  const imageData = data.youtubeImage.childImageSharp.fluid
  return (
    <YoutubeImageStyles>
      <Img fluid={imageData} />
    </YoutubeImageStyles>
  )
}

export default YoutubeImage
