import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import { colors, H2LatoGold, B1OpenSansWhite } from "../../styles/helpers"

const HospitalitySection = styled.section`
  position: relative;
  margin-bottom: 5rem;
  background-color: ${colors.colorPrimary};

  @media (min-width: 1025px) {
    margin-bottom: 10rem;
  }

  .wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
  }

  .content {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(55% - 3rem);
      margin-right: 3rem;
      margin-left: auto;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 65rem;
      margin-right: 5.5rem;
      margin-left: auto;
      padding: 8.5rem 0;
    }

    h2 {
      ${H2LatoGold};
    }

    p {
      ${B1OpenSansWhite};
    }
  }

  .image {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(45%);
    }

    @media (min-width: 1024px) {
      width: calc(40%);
    }

    &__background {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    }
  }
`

const Hospitality = ({ hospitality }) => {
  return (
    <HospitalitySection>
      <div className="wrapper">
        <div className="content">
          <div>
            <h2>{hospitality.acf._wfc_hos_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: hospitality.acf._wfc_hos_content,
            }}
          />
        </div>
        <div className="image">
          <BGImg
            fluid={
              hospitality.acf._wfc_hos_image.localFile.childImageSharp.fluid
            }
            className="image__background"
            tag="div"
          />
        </div>
      </div>
    </HospitalitySection>
  )
}

export default Hospitality
