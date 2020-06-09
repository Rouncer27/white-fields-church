import React, { useState } from "react"
import BGImage from "gatsby-background-image"
import styled from "styled-components"
import axios from "axios"
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
import FormSubmit from "../modals/FormSubmit"
import FormErrors from "../modals/FormErrors"
import FormSuccess from "../modals/FormSuccess"

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
    display: none;
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    width: calc(171.3rem / 4);
    height: calc(217.1rem / 4);
    z-index: 1;

    @media (min-width: 768px) {
      display: block;
    }
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

const submitToWebServer = async (formID, data) => {
  const FORM_POST_URL = `https://whitefields.swbdatabases.ca/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`
  const config = { headers: { "Content-Type": "multipart/form-data" } }
  const serverResponse = await axios.post(FORM_POST_URL, data, config)
  if (serverResponse.data.status === "mail_sent") {
    return { errors: false, errorMessages: [] }
  } else {
    return { errors: true, errorMessages: serverResponse.data.invalidFields }
  }
}

const ContactForm = ({ contactForm }) => {
  const [formField, setFormFeilds] = useState({})
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleFieldChange = e => {
    setFormFeilds({ ...formField, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formField)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })
    const response = await submitToWebServer(347, bodyFormData)
    handleUpdateServerResponse(response)
  }

  const handleUpdateServerResponse = response => {
    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })
    setFormFeilds({})
  }

  const errors = formStatus.errors

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
          <form onSubmit={e => handleFormSubmit(e)}>
            <FormInput
              label="Full Name"
              name="fullName"
              id="fullName"
              type="text"
              required={true}
              errors={errors}
              value={formField.fullName ? formField.fullName : ""}
              handleOnChange={handleFieldChange}
            />
            <FormInput
              label="Email"
              name="yourEmail"
              id="yourEmail"
              type="email"
              required={true}
              errors={errors}
              value={formField.yourEmail ? formField.yourEmail : ""}
              handleOnChange={handleFieldChange}
            />
            <FormInput
              label="Phone"
              name="phoneNumber"
              id="phoneNumber"
              type="text"
              required={true}
              errors={errors}
              value={formField.phoneNumber ? formField.phoneNumber : ""}
              handleOnChange={handleFieldChange}
            />
            <FormTextarea
              label="Comment"
              name="comment"
              id="comment"
              required={true}
              rows={12}
              errors={errors}
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
      <FormSubmit isActive={formStatus.submitting} />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
    </ContactFormSection>
  )
}

export default ContactForm
