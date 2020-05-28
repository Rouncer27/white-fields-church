import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { standardWrapper } from "../../styles/helpers"

const SeriesSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }
`

const SeriesItem = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50%);
  }

  @media (min-width: 1025px) {
    width: calc(50%);
  }
`

const Series = ({ series }) => {
  console.log(series)
  return (
    <SeriesSection>
      <div className="wrapper">
        {series.edges.map(item => {
          return (
            <SeriesItem key={item.node.wordpress_id}>
              <div>
                <Img
                  fluid={
                    item.node.acf._wfc_mescat_featured_image.localFile
                      .childImageSharp.fluid
                  }
                  alt={item.node.name}
                />
              </div>
              <div>
                <h2>{item.node.name}</h2>
              </div>
            </SeriesItem>
          )
        })}
      </div>
    </SeriesSection>
  )
}

export default Series
