import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  colors,
  medWrapper,
  headlineTwo,
  bodyCopyOne,
  bodyCopyTwo,
  buttonOne,
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
      ${headlineTwo};
      margin: 0;
      color: ${colors.colorPrimary};
    }
  }

  .calBtn {
    width: 100%;
    margin: 7.5rem auto 3rem;
    text-align: center;

    a {
      ${buttonOne};
    }
  }
`

const EventItem = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
    margin: auto 2rem;
  }

  .content {
    padding: 1rem 4rem;
    background-color: ${colors.colorPrimary};
    text-align: center;

    h3 {
      ${bodyCopyOne};
      color: ${colors.white};
    }

    p {
      ${bodyCopyTwo};
      color: ${colors.white};
    }
  }
`

const HappeningNow = ({ happeningNow }) => {
  const title = happeningNow.acf._wfc_hpn_title
  const events = happeningNow.acf._wfc_hpn_events
  return (
    <HappeningNowSection>
      <div className="wrapper">
        <div className="title">
          <h2>{title}</h2>
        </div>

        {events.map((event, index) => {
          const imgFluid = event.image.localFile.childImageSharp.fluid
          return (
            <EventItem key={index}>
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
