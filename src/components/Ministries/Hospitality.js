import React from "react"
import Img from "gatsby-image"

const Hospitality = ({ hospitality }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{hospitality.acf._wfc_hos_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: hospitality.acf._wfc_hos_content,
            }}
          />
        </div>
        <div>
          <Img
            fluid={
              hospitality.acf._wfc_hos_image.localFile.childImageSharp.fluid
            }
            alt={hospitality.acf._wfc_hos_image.alt_text}
          />
        </div>
      </div>
    </div>
  )
}

export default Hospitality
