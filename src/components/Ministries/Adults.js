import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import QuoteWWB from "../Quotes/QuoteWWB"
import Dove from "../Graphics/Dove"
import { colors, H2LatoGold, B1OpenSansWhite } from "../../styles/helpers"

const AdultsSection = styled.section`
  position: relative;
  background-color: ${colors.colorPrimary};

  .graphic {
    position: absolute;
    top: -10rem;
    left: -5rem;
    width: calc(94.7rem / 3.5);
    height: calc(275.3rem / 3.5);
    z-index: 10;
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
    align-self: center;
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(55% - 3rem);
      margin-right: auto;
      margin-left: 3rem;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 55rem;
      margin-right: auto;
      margin-left: 5.5rem;
      padding: 5rem 0;
    }

    h2 {
      ${H2LatoGold};
    }

    p,
    li {
      ${B1OpenSansWhite};
    }

    ul {
      margin: 2.5rem auto;
    }
  }

  .images {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(45%);
    }

    @media (min-width: 1024px) {
      width: calc(40%);
    }

    &__top {
      width: 100%;
    }

    &__bot {
      width: 100%;
      padding: 7.5rem 4rem;

      @media (min-width: 1025px) {
        padding: 10rem 4rem;
      }
    }
  }

  .graphicDove {
    position: absolute;
    top: -10rem;
    right: 10rem;
    width: calc(152.2rem / 3.5);
    height: calc(140.1rem / 3.5);
    z-index: 9999999999999;
  }
`

const Adults = ({ wfyAdults }) => {
  return (
    <AdultsSection>
      <div className="wrapper">
        <div className="images">
          <Img
            className="images__top"
            fluid={
              wfyAdults.acf._wfc_wfya_image.localFile.childImageSharp.fluid
            }
            alt={wfyAdults.acf._wfc_wfya_image.alt_text}
          />
          <div className="images__bot">
            <QuoteWWB />
          </div>
        </div>
        <div className="content">
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
      <div className="graphicDove">
        <Dove />
      </div>
    </AdultsSection>
  )
}

export default Adults
