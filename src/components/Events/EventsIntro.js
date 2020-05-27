import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import { H1LatoBlue, B1OpenSansBlue } from "../../styles/helpers"
import Dove from "../Graphics/Dove"

const EventsIntroSection = styled.section`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;

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
    bottom: 0;
    right: 1rem;
    width: calc(152.2rem / 4);
    height: calc(140.1rem / 4);
    z-index: 5;
  }
`

const EventsIntro = ({ eventsIntro }) => {
  return (
    <EventsIntroSection>
      <div className="wrapper">
        <div className="image">
          <BGImg
            className="image__background"
            tag="div"
            fluid={
              eventsIntro.acf._wcf_evin_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className="content">
          <div>
            <h2>{eventsIntro.acf._wfc_evin_title}</h2>
          </div>
          <div
            className="content__description"
            dangerouslySetInnerHTML={{
              __html: eventsIntro.acf._wfc_evin_content,
            }}
          />
        </div>
      </div>
      <div className="graphicDove">
        <Dove />
      </div>
    </EventsIntroSection>
  )
}

export default EventsIntro
