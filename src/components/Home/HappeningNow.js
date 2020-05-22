import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import * as ScrollMagic from "scrollmagic"
import gsap from "gsap"
// import addIndicators from "debug.addIndicators"

import {
  colors,
  medWrapper,
  H2LatoBlue,
  B1OpenSansWhite,
  B2OpenSansWhiteBold,
  buttonOneWhite,
} from "../../styles/helpers"
import BrushStroke from "../Graphics/BrushStroke"

const HappeningNowSection = styled.section`
  position: relative;
  padding: 4rem 0;
  background-color: ${colors.white};

  .wrapper {
    ${medWrapper};
    align-items: flex-start;
  }

  .title {
    width: 100%;
    margin: 3rem auto 7.5rem;
    text-align: center;

    h2 {
      ${H2LatoBlue};
      margin: 0;
      color: ${colors.colorPrimary};
    }
  }

  .calBtn {
    width: 100%;
    margin: 7.5rem auto 3rem;
    text-align: center;

    a {
      ${buttonOneWhite};
    }
  }

  .backgroundGraphic {
    position: absolute;
    bottom: -12.75rem;
    right: 2.5%;
    width: 33rem;
    height: 113.8rem;
    z-index: 1;
  }
`

const EventItem = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem auto;
  transition: box-shadow 0.3s ease-in;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.26);
  z-index: 10;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
    margin: auto 2rem;
  }

  .content {
    padding: 1rem 4rem;
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

const HappeningNow = ({ happeningNow }) => {
  const eleContainer = useRef(null)
  const title = happeningNow.acf._wfc_hpn_title
  const events = happeningNow.acf._wfc_hpn_events
  let cards = []

  useEffect(() => {
    const controller = new ScrollMagic.Controller()

    cards = [...eleContainer.current.querySelectorAll(".eventItem")]

    const timeLine = gsap
      .timeline()
      .fromTo(
        cards,
        { duration: 1.5, y: 300, autoAlpha: 0, ease: "back", stagger: 0.3 },
        { y: 0, autoAlpha: 1, stagger: 0.3 },
        "<-0.5"
      )

    new ScrollMagic.Scene({
      duration: 0,
      offset: 0,
      triggerElement: ".title",
      reverse: false,
    })
      .setTween(timeLine)
      // .addIndicators()
      .addTo(controller)
  }, [])

  return (
    <HappeningNowSection>
      <div ref={eleContainer} className="wrapper">
        <div className="title">
          <h2>{title}</h2>
        </div>

        {events.map((event, index) => {
          const imgFluid = event.image.localFile.childImageSharp.fluid
          return (
            <EventItem key={index} className="eventItem">
              <div>
                <Img fluid={imgFluid} />
              </div>
              <div className="content">
                <div>
                  <h3>{event.title}</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: event.excerpt }} />
              </div>
            </EventItem>
          )
        })}
        <div className="calBtn">
          <a href="https://example.com">Event Calendar</a>
        </div>
      </div>
      <div className="backgroundGraphic">
        <BrushStroke />
      </div>
    </HappeningNowSection>
  )
}

export default HappeningNow
