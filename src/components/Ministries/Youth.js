import React from "react"
import Img from "gatsby-image"

const Youth = ({ wfYouth }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{wfYouth.acf._wfc_wfy_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: wfYouth.acf._wfc_wfy_content }}
          />
        </div>
        <div>
          <Img
            fluid={wfYouth.acf._wfc_wfy_image.localFile.childImageSharp.fluid}
            alt={wfYouth.acf._wfc_wfy_image.alt_text}
          />
        </div>
      </div>
    </div>
  )
}

export default Youth
