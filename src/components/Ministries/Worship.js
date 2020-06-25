import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  medWrapper,
  H2LatoBlue,
  B1OpenSansBlue,
  buttonOneWhite,
  colors,
} from "../../styles/helpers"
gsap.registerPlugin(ScrollTrigger)

const WorshipSection = styled.section`
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
    margin-top: 5rem;

    @media (min-width: 768px) {
      width: calc(60% - 3rem);
      margin-top: 0;
      margin-bottom: 5rem;
      margin-left: 3rem;
    }

    @media (min-width: 1024px) {
      width: calc(65% - 7.5rem);
      margin-right: auto;
      margin-left: 7.5rem;
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
      right: -2rem;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorTertiary};
      opacity: 0.2;
      z-index: 1;
    }
  }
`

const Worship = ({ worship }) => {
  const triggerElement = useRef(null)
  const bodyImage = useRef(null)
  const bodyBackground = useRef(null)

  const bodyTitle = useRef(null)
  const bodyContent = useRef(null)

  useEffect(() => {
    const bodyBgImg = bodyImage.current.querySelector(".image__background")
    gsap.set(bodyBgImg, { y: -20 })
    gsap.to(bodyBgImg, {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: triggerElement.current,
        markers: false,
        scrub: true,
        start: "top 100%",
        end: "top -120%",
      },
    })

    gsap.to(bodyTitle.current, { autoAlpha: 0, x: 150 })
    gsap.to(bodyContent.current, { autoAlpha: 0, x: 150 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement.current,
          markers: false,
          scrub: false,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
      .to(bodyTitle.current, {
        autoAlpha: 1,
        x: 0,
        duration: 1,
      })
      .to(
        bodyContent.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        "-=0.5"
      )
  }, [])
  return (
    <WorshipSection>
      <div ref={triggerElement} className="wrapper">
        <div ref={bodyImage} className="image">
          <BGImg
            fluid={worship.acf._wfc_wor_image.localFile.childImageSharp.fluid}
            tag="div"
            className="image__background"
          />
          <div ref={bodyBackground} className="image__graphic" />
        </div>
        <div className="content">
          <div ref={bodyTitle} className="content__title">
            <h2>{worship.acf._wfc_wor_title}</h2>
          </div>
          <div
            ref={bodyContent}
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{
              __html: worship.acf._wfc_wor_content,
            }}
          />
        </div>
      </div>
    </WorshipSection>
  )
}

export default Worship
