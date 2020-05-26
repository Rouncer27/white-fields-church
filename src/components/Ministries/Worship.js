import React from "react"
import Img from "gatsby-image"

const Worship = ({ worship }) => {
  return (
    <div>
      <div>
        <div>
          <Img
            fluid={worship.acf._wfc_wor_image.localFile.childImageSharp.fluid}
            alt={worship.acf._wfc_wor_image.alt_text}
          />
        </div>
        <div>
          <div>
            <h2>{worship.acf._wfc_wor_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: worship.acf._wfc_wor_content,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Worship
