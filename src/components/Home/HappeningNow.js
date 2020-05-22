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

const HappeningNowSection = styled.section`
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
`

const EventItem = styled.div`
  width: 100%;
  margin: 3rem auto;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
    margin: auto 2rem;
  }

  .content {
    padding: 1rem 4rem;
    background-color: ${colors.colorPrimary};
    text-align: center;

    h3 {
      ${B2OpenSansWhiteBold};
      text-transform: uppercase;
    }

    p {
      ${B1OpenSansWhite};
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
    </HappeningNowSection>
  )
}

export default HappeningNow
