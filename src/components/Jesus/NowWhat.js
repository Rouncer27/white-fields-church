import React from "react"
import styled from "styled-components"
import BGImage from "gatsby-background-image"
import QuoteNowWhat from "../Quotes/QuoteNowWhat"
import DoveWhite from "../Graphics/DoveWhite"
import { colors, B1OpenSansWhite, H2LatoGold } from "../../styles/helpers"

const NowWhatSection = styled.section`
  position: relative;
  background-color: ${colors.colorPrimary};

  .wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
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

  .content {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(55% - 3rem);
      margin-left: 3rem;
      margin-right: auto;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 65rem;
      margin-left: 5.5rem;
      margin-right: auto;
      padding: 8.5rem 0;
    }

    &__title {
      h2 {
        ${H2LatoGold};
      }
    }

    &__wysiwyg {
      p {
        ${B1OpenSansWhite};
      }

      blockquote {
        p {
          color: ${colors.colorSecondary};
        }
      }
    }

    &__quote {
      max-width: 50rem;
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .graphic {
    position: absolute;
    top: 10rem;
    right: 1rem;
    width: calc(152.2rem / 4);
    height: calc(140.1rem / 4);
    opacity: 0.3;
    z-index: 10;
  }
`

const NowWhat = ({ soNowWhat }) => {
  return (
    <NowWhatSection>
      <div className="wrapper">
        <div className="image">
          <BGImage
            tag="div"
            className="image__background"
            fluid={soNowWhat.acf._wcf_snw_image.localFile.childImageSharp.fluid}
          />
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{soNowWhat.acf._wfc_snw_title}</h2>
          </div>
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{ __html: soNowWhat.acf._wfc_snw_content }}
          />
          <div className="content__quote">
            <QuoteNowWhat />
          </div>
        </div>
      </div>
      <div className="graphic">
        <DoveWhite />
      </div>
    </NowWhatSection>
  )
}

export default NowWhat
