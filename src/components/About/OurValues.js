import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BGImage from "gatsby-background-image"
import { colors, H2LatoGold, B3OpenSans } from "../../styles/helpers"
import BrushStrokeFour from "../Graphics/BrushStrokeFour"
import QuoteWWB from "../Quotes/QuoteWWB"

const OurValuesSection = styled.section`
  position: relative;
  background-color: ${colors.colorPrimary};
  overflow: hidden;

  .wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
  }

  .pointsContainer {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(70% - 3rem);
      margin-left: auto;
      margin-right: 3rem;
    }

    @media (min-width: 1024px) {
      width: calc(65% - 5.5rem);
      max-width: 70rem;
      margin-left: auto;
      margin-right: 5.5rem;
      padding: 5rem 0;
    }

    .mainTitle {
      h2 {
        ${H2LatoGold};
      }
    }

    .points {
      p {
        ${B3OpenSans};
        color: ${colors.white};
        font-weight: normal;

        span {
          color: ${colors.colorSecondary};
        }
      }
    }
  }

  .imageContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 5;

    @media (min-width: 768px) {
      width: calc(30%);
    }

    @media (min-width: 1024px) {
      width: calc(35%);
    }

    .imageTop {
      width: 100%;
    }

    .imageBot {
      width: 100%;
      margin-top: 5rem;
      margin-bottom: 5rem;
      padding: 2rem;

      @media (min-width: 1025px) {
        margin-top: auto;
        margin-bottom: auto;
        padding: 5rem;
      }
    }

    &__image {
      width: 100%;
    }
  }

  .graphic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(249rem / 3.5);
    height: calc(216.3rem / 3.5);
    z-index: 1;
  }

  .sepImage {
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

const OurValues = ({ ourVlaues }) => {
  return (
    <OurValuesSection id="values">
      <div className="wrapper">
        <div className="pointsContainer">
          <div className="mainTitle">
            <h2>{ourVlaues.acf._wfc_ourval_title_copy}</h2>
          </div>
          <div className="points">
            {ourVlaues.acf._wfc_ourval_points_copy.map((point, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: point.point }} />
            ))}
          </div>
        </div>
        <div className="imageContainer">
          <div className="imageTop">
            <Img
              className="imageContainer__image"
              fluid={
                ourVlaues.acf._wfc_ourval_image_copy.localFile.childImageSharp
                  .fluid
              }
              alt="What we believe"
            />
          </div>
          <div className="imageBot">
            <QuoteWWB />
          </div>
        </div>
      </div>
      <div className="graphic">
        <BrushStrokeFour />
      </div>
      <div className="sepImage">
        <BGImage
          tag="div"
          className="sepImage__image"
          fluid={
            ourVlaues.acf._wfc_ourval_bot_sep_img_copy.localFile.childImageSharp
              .fluid
          }
        />
      </div>
    </OurValuesSection>
  )
}

export default OurValues
