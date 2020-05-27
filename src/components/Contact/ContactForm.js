import React from "react"
import BGImage from "gatsby-background-image"
import styled from "styled-components"

const ContactFormSection = styled.section`
  .botImage {
    position: relative;
    width: 100%;
    min-height: 25rem;

    @media (min-width: 1025px) {
      min-height: 25vw;
    }

    @media (min-width: 1025px) {
      min-height: 25vw;
    }

    &__image {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const ContactForm = ({ contactForm }) => {
  return (
    <ContactFormSection>
      <div>
        <div>
          <h2>Contact Form</h2>
        </div>
      </div>
      <div className="botImage">
        <BGImage
          tag="div"
          className="botImage__image"
          fluid={
            contactForm.acf._wfc_cofor_image.localFile.childImageSharp.fluid
          }
        />
      </div>
    </ContactFormSection>
  )
}

export default ContactForm
