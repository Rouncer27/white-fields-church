import React from "react"
import Img from "gatsby-image"

const Adults = ({ wfyAdults }) => {
  return (
    <div>
      <div>
        <div>
          <Img
            fluid={
              wfyAdults.acf._wfc_wfya_image.localFile.childImageSharp.fluid
            }
            alt={wfyAdults.acf._wfc_wfya_image.alt_text}
          />
        </div>
        <div>
          <div>
            <h2>{wfyAdults.acf._wfc_wfya_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: wfyAdults.acf._wfc_wfya_content,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Adults
