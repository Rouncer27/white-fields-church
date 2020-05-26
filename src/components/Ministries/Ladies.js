import React from "react"
import Img from "gatsby-image"

const Ladies = ({ wfLadies }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{wfLadies.acf._wfc_lmi_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: wfLadies.acf._wfc_lmi_content,
            }}
          />
        </div>
        <div>
          <Img
            fluid={wfLadies.acf._wfc_lmi_image.localFile.childImageSharp.fluid}
            alt={wfLadies.acf._wfc_lmi_image.alt_text}
          />
        </div>
      </div>
    </div>
  )
}

export default Ladies
