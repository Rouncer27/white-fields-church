import React, { useState } from "react"
import BGImage from "gatsby-background-image"
import styled from "styled-components"
import FormInput from "../Form/FormInput"
import FormTextarea from "../Form/FormTextarea"
import {
  colors,
  H2LatoBlue,
  B1OpenSansBlue,
  buttonOneWhite,
} from "../../styles/helpers"
import WheatStock from "../Graphics/WheatStock"
import Dove from "../Graphics/Dove"

const ContactFormSection = styled.section`
  padding-top: 10rem;
  background-color: ${colors.colorPrimary};

  .contactWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: calc(100% - 10rem);
    max-width: 110rem;
    margin: 0 auto 10rem;
    padding: 2rem;
    background-color: ${colors.white};
    overflow: hidden;
  }

  .graphicWheat {
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    width: calc(171.3rem / 4);
    height: calc(217.1rem / 4);
    z-index: 1;
  }

  .graphicDove {
    position: absolute;
    bottom: 7.5rem;
    left: 7.5rem;
    width: calc(152.2rem / 5);
    height: calc(140.1rem / 5);
    z-index: 2;
  }

  .contactForm {
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(60%);
    }

    @media (min-width: 1025px) {
      padding: 15rem 5rem 0;
    }

    .formBtn {
      margin-bottom: 2.5rem;
      text-align: right;

      button {
        ${buttonOneWhite};
      }
    }
  }

  .contactContent {
    position: relative;
    width: 100%;
    padding: 3rem;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(40%);
      padding: 0 5rem 5rem;
    }

    @media (min-width: 1025px) {
    }

    h2 {
      ${H2LatoBlue};
    }

    p {
      ${B1OpenSansBlue};
    }
  }

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
  console.log(contactForm)
  const [formField, setFormFeilds] = useState({})

  const handleFieldChange = e => {
    setFormFeilds({ ...formField, [e.target.name]: e.target.value })
  }
  return (
    <ContactFormSection>
      <div className="contactWrapper">
        <div className="contactContent">
          <div>
            <h2>{contactForm.acf._wfc_cofor_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: contactForm.acf._wfc_cofor_content,
            }}
          />
        </div>
        <div className="contactForm">
          <form>
            <FormInput
              label="Full Name"
              name="fullName"
              id="fullName"
              type="text"
              value={formField.name ? formField.name : ""}
              handleOnChange={handleFieldChange}
            />
            <FormInput
              label="Email"
              name="email"
              id="email"
              type="email"
              value={formField.email ? formField.email : ""}
              handleOnChange={handleFieldChange}
            />
            <FormInput
              label="Phone"
              name="phone"
              id="phone"
              type="text"
              value={formField.phone ? formField.phone : ""}
              handleOnChange={handleFieldChange}
            />
            <FormTextarea
              label="Comment"
              name="comment"
              id="comment"
              rows={12}
              value={formField.comment ? formField.comment : ""}
              handleOnChange={handleFieldChange}
            />
            <div className="formBtn">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="graphicWheat">
          <WheatStock />
        </div>
        <div className="graphicDove">
          <Dove />
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
