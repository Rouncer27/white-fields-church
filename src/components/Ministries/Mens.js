import React from "react"
import Img from "gatsby-image"

const Mens = ({ wfMens }) => {
  return (
    <div>
      <div>
        <div>
          <Img
            fluid={wfMens.acf._wfc_mm_image.localFile.childImageSharp.fluid}
            alt={wfMens.acf._wfc_mm_image.alt_text}
          />
        </div>
        <div>
          <div>
            <h2>{wfMens.acf._wfc_mm_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: wfMens.acf._wfc_mm_content,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Mens
