import React from "react"
import Img from "gatsby-image"

const BodyLife = ({ wfBodyLife }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{wfBodyLife.acf._wfc_blg_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: wfBodyLife.acf._wfc_blg_contact,
            }}
          />
        </div>
        <div>
          <Img
            fluid={
              wfBodyLife.acf._wfc_blg_image.localFile.childImageSharp.fluid
            }
            alt={wfBodyLife.acf._wfc_blg_image.alt_text}
          />
        </div>
      </div>
    </div>
  )
}

export default BodyLife
