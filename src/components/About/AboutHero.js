import React, { useEffect, useRef } from "react"
import BGImage from "gatsby-background-image"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { H1LatoWhite } from "../../styles/helpers"
import BrushStrokesTwo from "../Graphics/BrushStrokeTwo"

gsap.registerPlugin(ScrollTrigger)

const HeroImage = styled.section`
  position: relative;
  min-height: 40rem;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 50rem;
  }

  @media (min-width: 1025px) {
    min-height: 67.5rem;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 5;

    h2 {
      ${H1LatoWhite};
      margin: 0;
    }
  }

  .graphic {
    position: absolute;
    top: 5rem;
    right: -15rem;
    width: calc(169.2rem / 3.25);
    height: calc(135.5rem / 3.25);
    z-index: 100;

    @media (min-width: 768px) {
      right: -10rem;
      width: calc(169.2rem / 3);
      height: calc(135.5rem / 3);
    }

    @media (min-width: 1025px) {
      top: 5rem;
      width: calc(169.2rem / 2.25);
      height: calc(135.5rem / 2.25);
    }
  }

  .hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__image {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const AboutHero = ({ aboutHero }) => {
  const heroSection = useRef(null)
  const heroTitle = useRef(null)
  const heroGraphic = useRef(null)

  useEffect(() => {
    gsap.set(heroGraphic.current, { y: 50 })

    gsap
      .timeline()
      .add("start")
      .fromTo(
        heroTitle.current,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.5 }
      )

    gsap.to(heroGraphic.current, {
      y: 0,
      duration: 100,
      scrollTrigger: {
        trigger: heroSection.current,
        markers: false,
        scrub: 1,
        start: "top 20%",
        end: "top -120%",
      },
    })
  }, [])

  return (
    <HeroImage ref={heroSection}>
      <div ref={heroTitle} className="title">
        <h2>{aboutHero.acf._wfc_mhs_hero_title}</h2>
      </div>
      <div ref={heroGraphic} className="graphic">
        <BrushStrokesTwo />
      </div>
      <div className="hero">
        <BGImage
          tag="div"
          className="hero__image"
          fluid={
            aboutHero.acf._wfc_mhs_hero_image.localFile.childImageSharp.fluid
          }
        />
      </div>
    </HeroImage>
  )
}

export default AboutHero
