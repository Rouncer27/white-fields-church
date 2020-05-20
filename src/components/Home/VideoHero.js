import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import LogoWhite from "../Logos/LogoWhite"
import GuitarImage from "../../images/guitar.jpg"
import GuitarVideo from "../../assets/guitar.mp4"

import { headlineFour, colors } from "../../styles/helpers"

// Animations Packages. //
import * as ScrollMagic from "scrollmagic"
import gsap from "gsap"
import addIndicators from "debug.addIndicators"

console.log("addIndicators", addIndicators)

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
        ${headlineFour};
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
    const controller = new ScrollMagic.Controller()
    const timeLine = gsap
      .timeline()
      .to(".heroContent", { y: -200, scale: 0.5, duration: 3 })

    new ScrollMagic.Scene({
      duration: 750,
      offset: 500,
      triggerElement: "#boxTrigger",
      reverse: true,
    })
      .setTween(timeLine)
      .addTo(controller)
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
