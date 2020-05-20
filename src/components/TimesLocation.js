import React from "react"
import styled from "styled-components"
import {
  headlineTwo,
  colors,
  headlineFour,
  bodyCopyTwo,
} from "../styles/helpers"

const TimesLocationDiv = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50%);
  }

  @media (min-width: 1024px) {
    width: calc(50% - 6rem);
    margin: 2rem 3rem;
  }

  .header {
    width: 100%;
    text-align: center;

    h2 {
      ${headlineTwo};
      margin-bottom: 3rem;
      color: ${colors.colorPrimary};
    }
  }
`

const TimeStyled = styled.div`
  text-align: center;

  h2 {
    ${headlineFour};
    color: ${colors.colorSecondary};
  }

  p {
    ${bodyCopyTwo};
  }
`

const TimesLocation = ({ services }) => {
  const times = services.acf._wfc_service_times
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
    </TimesLocationDiv>
  )
}

export default TimesLocation
