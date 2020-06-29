import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  colors,
  medWrapper,
  B1OpenSansWhite,
  B2OpenSansWhiteBold,
} from "../../styles/helpers"
import BrushStrokeFour from "../Graphics/BrushStrokeFour"
import { createSlug } from "../../utils/helperFunc"

const BoxLinksSection = styled.section`
  position: relative;
  padding: 4rem 0;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 10rem 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .backgroundGraphic {
    position: absolute;
    bottom: -12.75rem;
    left: 2.5%;
    width: calc(249rem / 3);
    height: calc(216.3rem / 3);
    transform: rotate(-100deg);
    z-index: 1;
  }
`

const BoxLink = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 3rem auto;
  transition: box-shadow 0.3s ease-in;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.26);
  z-index: 10;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
    margin: 0 2rem;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .image {
    flex-grow: 1;
    background-color: ${colors.colorPrimary};
  }

  .content {
    flex-grow: 1;
    padding: 1rem 3rem;
    transition: background-color 0.3s ease-in;
    background-color: ${colors.colorPrimary};
    text-align: center;

    h3 {
      ${B2OpenSansWhiteBold};
      transition: color 0.3s ease-in;
      text-transform: uppercase;
    }

    p {
      ${B1OpenSansWhite};
      transition: color 0.3s ease-in;
    }
  }

  &:hover {
    box-shadow: 0 0.75rem 1rem 0 rgba(0, 0, 0, 0.35);
    cursor: pointer;

    .content {
      background-color: ${colors.colorTertiary};
      h3 {
        color: ${colors.colorPrimary};
      }

      p {
        color: ${colors.colorPrimary};
      }
    }
  }
`

const BoxLinks = ({ boxLinks }) => {
  const eleContainer = useRef(null)
  let cards = []

  useEffect(() => {
    cards = [...eleContainer.current.querySelectorAll(".eventItem")]
    gsap.set(cards, { autoAlpha: 0, y: 200 })
    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      stagger: {
        each: 0.25,
        from: "center",
      },
      scrollTrigger: {
        trigger: cards,
        markers: false,
        start: "top 90%",
        end: "bottom 0%",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  return (
    <BoxLinksSection>
      <div ref={eleContainer} className="wrapper">
        {boxLinks.acf._wfc_bxlk_box_links.map((box, index) => {
          const slug = createSlug(box.link)
          const boxLinkItem =
            box.internal__external === "internal" ? (
              <BoxLink key={index} className="eventItem">
                <Link to={`${slug === "/" ? slug : `/${slug}`}`}>
                  <div className="image">
                    <Img fluid={box.image.localFile.childImageSharp.fluid} />
                  </div>
                  <div className="content">
                    <div>
                      <h3>{box.title}</h3>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: box.description }}
                    />
                  </div>
                </Link>
              </BoxLink>
            ) : (
              <BoxLink key={index} className="eventItem">
                <a target="_blank" rel="noopener noreferrer" href={box.url}>
                  <div className="image">
                    <Img fluid={box.image.localFile.childImageSharp.fluid} />
                  </div>
                  <div className="content">
                    <div>
                      <h3>{box.title}</h3>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: box.description }}
                    />
                  </div>
                </a>
              </BoxLink>
            )

          return boxLinkItem
        })}
      </div>
      <div className="backgroundGraphic">
        <BrushStrokeFour />
      </div>
    </BoxLinksSection>
  )
}

export default BoxLinks
