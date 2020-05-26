import React from "react"
import Img from "gatsby-image"

const Kids = ({ wfKids }) => {
  console.log("kids: ", wfKids)
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{wfKids.acf._wfc_wfk_title}</h2>
          </div>
          <div>
            {wfKids.acf._wfc_wfk_kids_section.map((section, index) => {
              return (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kids
