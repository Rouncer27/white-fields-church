import React from "react"
import styled from "styled-components"
import BGImage from "gatsby-background-image"

import BrushStrokeThree from "../Graphics/BrushStrokeThree"
import { colors, H2LatoGold, B1OpenSansWhite } from "../../styles/helpers"

const ContentTop = styled.section`
  position: relative;
  background-color: ${colors.colorPrimary};
  overflow: hidden;

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
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(55% - 3rem);
      margin-right: 3rem;
      margin-left: auto;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 55rem;
      margin-right: 5.5rem;
      margin-left: auto;
      padding: 5rem 0;
    }

    h2 {
      ${H2LatoGold};
    }

    p {
      ${B1OpenSansWhite};
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(45%);
    }

    @media (min-width: 1024px) {
      width: calc(40%);
    }

    &__top {
      position: relative;
      width: 100%;
      min-height: 30rem;

      @media (min-width: 768px) {
        min-height: auto;
      }

      &--image {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &__bot {
      position: relative;
      width: 100%;
      min-height: 30rem;

      @media (min-width: 768px) {
        min-height: auto;
      }

      &--image {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`

const ContentBlockTop = ({ contentBlockTop }) => {
  console.log(contentBlockTop)
  return (
    <ContentTop>
      <div className="wrapper">
        <div className="content">
          <div
            dangerouslySetInnerHTML={{
              __html: contentBlockTop.acf._wfc_cbt_content,
            }}
          />
        </div>
        <div className="images">
          <div className="images__top">
            <BGImage
              className="images__top--image"
              tag="div"
              fluid={
                contentBlockTop.acf._wfc_cbt_top_image.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="images__bot">
            <BGImage
              className="images__bot--image"
              tag="div"
              fluid={
                contentBlockTop.acf._wfc_cbt_bot_image.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
      </div>
      <div className="graphic">
        <BrushStrokeThree />
      </div>
    </ContentTop>
  )
}

export default ContentBlockTop
