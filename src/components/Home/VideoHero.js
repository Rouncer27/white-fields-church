import React, { useEffect, useRef } from "react"
import styled from "styled-components"
// Animations Packages. //
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import addIndicators from "debug.addIndicators"

import LogoWhite from "../Logos/LogoWhite"
import GuitarImage from "../../images/guitar.jpg"
import GuitarVideo from "../../assets/guitar.mp4"
import { H4LatoWhite, colors } from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

const VideoHeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 50rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 50rem;
  }

  @media (min-width: 1025px) {
    height: 85vh;
    min-height: 55rem;
  }

  .heroContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 75rem;
    margin: auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    z-index: 10;

    &__logo {
      width: 100%;
      max-width: 70rem;
      margin: 0 auto 5rem;
    }

    &__quote {
      width: 100%;
      margin: 5rem auto 0;
      text-align: center;

      p {
        ${H4LatoWhite};
        margin: 0;
        color: ${colors.white};
      }
    }
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

const VideoHero = ({ logoDisplay, quote, video }) => {
  const heroContent = useRef(null)

  useEffect(() => {
    gsap.set(".heroContent", { y: 100, scale: 1 })
    gsap.to(".heroContent", {
      y: -250,
      scale: 0.75,
      duration: 3,
      scrollTrigger: {
        trigger: "#boxTrigger",
        markers: false,
        scrub: true,
        start: "top 25%%",
        end: "bottom -75%",
      },
    })
  }, [])

  return (
    <VideoHeroSection id="boxTrigger">
      <div className="heroContent" ref={heroContent}>
        {logoDisplay && (
          <div className="heroContent__logo">
            <LogoWhite />
          </div>
        )}
        <div
          className="heroContent__quote"
          dangerouslySetInnerHTML={{ __html: quote }}
        />
      </div>
      <div>
        <video poster={GuitarImage} loop muted autoPlay>
          <source src={GuitarVideo} type="video/mp4" />
        </video>
      </div>
    </VideoHeroSection>
  )
}

export default VideoHero
