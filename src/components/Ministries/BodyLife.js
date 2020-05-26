import React from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import {
  medWrapper,
  H2LatoBlue,
  B1OpenSansBlue,
  colors,
} from "../../styles/helpers"

const BodyLifeSection = styled.section`
  padding: 5rem 0;

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
      background-color: ${colors.colorTertiary};
      opacity: 0.2;
      z-index: 1;
    }
  }
`

const BodyLife = ({ wfBodyLife }) => {
  return (
    <BodyLifeSection>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{wfBodyLife.acf._wfc_blg_title}</h2>
          </div>
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{
              __html: wfBodyLife.acf._wfc_blg_contact,
            }}
          />
        </div>
        <div className="image">
          <BGImg
            tag="div"
            className="image__background"
            fluid={
              wfBodyLife.acf._wfc_blg_image.localFile.childImageSharp.fluid
            }
          />
          <div className="image__graphic" />
        </div>
      </div>
    </BodyLifeSection>
  )
}

export default BodyLife
