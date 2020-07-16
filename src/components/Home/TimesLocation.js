import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  H2LatoBlue,
  H4LatoGold,
  B1OpenSansBlue,
  buttonOneWhite,
  colors,
} from "../../styles/helpers"

const TimesLocationDiv = styled.div`
  width: 100%;
  margin: 2rem auto 4rem;

  @media (min-width: 768px) {
    width: calc(50%);
    margin: 2rem 3rem;
  }

  @media (min-width: 1024px) {
    width: calc(50% - 6rem);
    margin: 2rem 3rem;
  }

  .header {
    width: 100%;
    text-align: center;

    h2 {
      ${H2LatoBlue};
      margin-bottom: 3rem;
      color: ${colors.colorPrimary};
    }
  }

  .directions {
    width: 100%;
    padding-top: 2rem;
    text-align: center;

    a {
      ${buttonOneWhite};
    }
  }
`

const TimeStyled = styled.div`
  text-align: center;

  h2 {
    ${H4LatoGold};
    color: ${colors.colorSecondary};
  }

  p {
    ${B1OpenSansBlue};
  }
`

const TimesLocation = ({ services }) => {
  const times = services.acf._wfc_service_times
  const directions = services.acf._wfc_service_directions
  return (
    <TimesLocationDiv>
      <div className="header">
        <h2>Service Times & Locations</h2>
      </div>
      {times.map((time, index) => {
        return (
          <TimeStyled key={index}>
            <div>
              <h2>{time.title}</h2>
            </div>
            <div>
              <p>{time.details}</p>
            </div>
          </TimeStyled>
        )
      })}
      <div className="directions">
        <Link to="/events/open-air-church">More Info</Link>
      </div>
    </TimesLocationDiv>
  )
}

export default TimesLocation
