import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"

const IntroQuoteSection = styled.section``

const IntroQuote = ({ quoteSection }) => {
  return (
    <IntroQuoteSection>
      <div>
        <div>
          <BGImg
            tag="div"
            fluid={
              quoteSection.acf._wcf_mqc_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div>
          <div>
            <h2>{quoteSection.acf._wfc_mqc_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: quoteSection.acf._wfc_mqc_content,
            }}
          />
        </div>
      </div>
    </IntroQuoteSection>
  )
}

export default IntroQuote
