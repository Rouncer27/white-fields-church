import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { Link } from "gatsby"
import {
  medWrapper,
  H2LatoBlue,
  B1OpenSansBlue,
  buttonOneWhite,
  colors,
} from "../../styles/helpers"

const LadiesSection = styled.section`
  padding: 5rem 0;
  background: ${colors.colorTertiary};

  @media (min-width: 1025px) {
    background: linear-gradient(
      to left,
      ${colors.colorTertiary} 0%,
      ${colors.colorTertiary} 95%,
      ${colors.white} 95%,
      ${colors.white} 100%
    );
  }

  @media (min-width: 768px) {
    padding: 7.5rem 0;
  }

  @media (min-width: 1024px) {
    padding: 10rem 0;
  }

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .content {
    width: 100%;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(60% - 3rem);
      margin-right: 3rem;
    }

    @media (min-width: 1024px) {
      width: calc(65% - 7.5rem);
      margin-right: 7.5rem;
      margin-left: auto;
      padding-left: 6%;
    }

    @media (min-width: 1400px) {
      padding-left: 0;
    }

    &__title {
      h2 {
        ${H2LatoBlue};
      }
    }

    &__wysiwyg {
      p {
        ${B1OpenSansBlue};
      }
    }

    &__link {
      width: 100%;

      a {
        ${buttonOneWhite};
      }
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: calc(100vw - 4rem);
    max-height: 40rem;

    @media (min-width: 768px) {
      width: calc(40%);
      height: calc(40vw - 2rem);
    }

    @media (min-width: 1024px) {
      width: calc(35%);
      height: calc(35vw - 2rem);
      max-height: 42.3rem;
    }

    @media (min-width: 1600px) {
      max-height: 51.1rem;
    }

    &__background {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    }

    &__graphic {
      position: absolute;
      top: 2rem;
      left: -2rem;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorPrimary};
      opacity: 0.1;
      z-index: 1;
    }
  }
`

const Ladies = ({ wfLadies }) => {
  return (
    <LadiesSection>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{wfLadies.acf._wfc_lmi_title}</h2>
          </div>
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{
              __html: wfLadies.acf._wfc_lmi_content,
            }}
          />
          <div className="content__link">
            <Link to="/events">Event Calendar</Link>
          </div>
        </div>
        <div className="image">
          <BGImg
            fluid={wfLadies.acf._wfc_lmi_image.localFile.childImageSharp.fluid}
            tag="div"
            className="image__background"
          />
          <div className="image__graphic" />
        </div>
      </div>
    </LadiesSection>
  )
}

export default Ladies
