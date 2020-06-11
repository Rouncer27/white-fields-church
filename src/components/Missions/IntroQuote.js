import React, { useEffect, useRef } from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import { gsap } from "gsap"
import {
  H1LatoBlue,
  B1OpenSansBlue,
  B2OpenSansBlueBold,
} from "../../styles/helpers"
import Dove from "../Graphics/Dove"
import BrushStrokeSix from "../Graphics/BrushStrokeSix"

const IntroQuoteSection = styled.section`
  position: relative;
  padding-top: 10rem;

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
  }

  .content {
    width: 100%;
    padding: 2rem;
    padding-bottom: 0;

    @media (min-width: 768px) {
      width: calc(60% - 2rem);
      margin-right: auto;
      margin-left: 2rem;
      padding: 2rem 1rem;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 2rem);
      max-width: 55rem;
      margin-right: auto;
      margin-left: 2rem;
      padding: 8.5rem 0;
      padding-left: 2rem;
    }

    h2 {
      ${H1LatoBlue};
    }

    &__description {
      p {
        ${B1OpenSansBlue};
      }
    }

    &__quote {
      p {
        ${B2OpenSansBlueBold};
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
      max-height: 40rem;
    }

    @media (min-width: 1024px) {
      width: calc(40%);
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
  }

  .graphicDove {
    position: absolute;
    top: 10rem;
    right: 1rem;
    width: calc(152.2rem / 4);
    height: calc(140.1rem / 4);
    opacity: 0.2;
    z-index: 5;
  }

  .graphicStroke {
    position: absolute;
    right: -5rem;
    bottom: -30rem;
    width: calc(253.8rem / 4);
    height: calc(203.3rem / 4);
    z-index: 1;
  }
`

const IntroQuote = ({ quoteSection }) => {
  const introImage = useRef(null)
  const introTitle = useRef(null)
  const introContent = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .add("start")
      .fromTo(
        introImage.current,
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0 }
      )
      .fromTo(
        introTitle.current,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0 },
        "start+=0.25"
      )
      .fromTo(
        introContent.current,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0 },
        "start+=0.5"
      )
  }, [])
  return (
    <IntroQuoteSection>
      <div className="wrapper">
        <div ref={introImage} className="image">
          <BGImg
            className="image__background"
            tag="div"
            fluid={
              quoteSection.acf._wcf_mqc_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className="content">
          <div ref={introTitle}>
            <h2>{quoteSection.acf._wfc_mqc_title}</h2>
          </div>
          <div ref={introContent}>
            <div
              className="content__description"
              dangerouslySetInnerHTML={{
                __html: quoteSection.acf._wfc_mqc_content,
              }}
            />
            <div
              className="content__quote"
              dangerouslySetInnerHTML={{
                __html: quoteSection.acf._wcf_mqc_quote,
              }}
            />
          </div>
        </div>
      </div>
      <div className="graphicDove">
        <Dove />
      </div>
      <div className="graphicStroke">
        <BrushStrokeSix />
      </div>
    </IntroQuoteSection>
  )
}

export default IntroQuote
