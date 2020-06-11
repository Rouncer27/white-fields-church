import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { Link } from "gatsby"
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

const YouthSection = styled.section`
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
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(60% - 3rem);
      margin-right: 3rem;
    }

    @media (min-width: 1024px) {
      width: calc(65% - 7.5rem);
      margin-right: 7.5rem;
      margin-left: auto;
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

    &__link {
      width: 100%;

      a {
        ${buttonOneWhite};
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
      left: -2rem;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorTertiary};
      opacity: 0.2;
      z-index: 1;
    }
  }
`

const Youth = ({ wfYouth }) => {
  const triggerElement = useRef(null)
  const youthImage = useRef(null)
  const youthBackground = useRef(null)

  useEffect(() => {
    const youthBgImg = youthImage.current.querySelector(".image__background")
    gsap.set(youthBgImg, { y: -20 })
    gsap.to(youthBgImg, {
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
  }, [])

  return (
    <YouthSection>
      <div ref={triggerElement} className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{wfYouth.acf._wfc_wfy_title}</h2>
          </div>
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{ __html: wfYouth.acf._wfc_wfy_content }}
          />
          <div className="content__link">
            <Link to="/events">Event Calendar</Link>
          </div>
        </div>
        <div ref={youthImage} className="image">
          <BGImg
            tag="div"
            className="image__background"
            fluid={wfYouth.acf._wfc_wfy_image.localFile.childImageSharp.fluid}
          />

          <div ref={youthBackground} className="image__graphic" />
        </div>
      </div>
    </YouthSection>
  )
}

export default Youth
