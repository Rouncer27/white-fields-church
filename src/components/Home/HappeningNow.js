import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  colors,
  medWrapper,
  H2LatoBlue,
  B1OpenSansWhite,
  B2OpenSansWhiteBold,
  buttonOneWhite,
} from "../../styles/helpers"
import BrushStroke from "../Graphics/BrushStroke"

gsap.registerPlugin(ScrollTrigger)

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

const EventItem = styled(Link)`
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

const HappeningNow = ({ happeningNow, happeningNowPost }) => {
  const eleContainer = useRef(null)
  const title = happeningNow.acf._wfc_hpn_title
  const events = happeningNowPost.edges
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
    <HappeningNowSection>
      <div ref={eleContainer} className="wrapper">
        <div className="title">
          <h2>{title}</h2>
        </div>

        {events.map((event, index) => {
          console.log(event)
          const imgFluid =
            event.node.acf._wfcc_evepos_featured_image.localFile.childImageSharp
              .fluid
          return (
            <EventItem
              to={`/events/${event.node.slug}`}
              key={index}
              className="eventItem"
            >
              <div>
                <Img fluid={imgFluid} />
              </div>
              <div className="content">
                <div>
                  <h3>{event.node.title}</h3>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: event.node.acf._wfcc_evepos_excerpt,
                  }}
                />
              </div>
            </EventItem>
          )
        })}
        <div className="calBtn">
          <Link to="/events">Event Calendar</Link>
        </div>
      </div>
      <div className="backgroundGraphic">
        <BrushStroke />
      </div>
    </HappeningNowSection>
  )
}

export default HappeningNow
