import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  standardWrapper,
  H2LatoBlue,
  H4LatoGold,
  B1OpenSansBlue,
  buttonOneWhite,
} from "../../styles/helpers"

const TimesLocationSection = styled.section`
  padding: 5rem 0;
  .wrapper {
    ${standardWrapper};

    @media (min-width: 768px) {
      max-width: 50rem;
    }
  }

  .mainContent {
    width: 100%;
    text-align: center;
  }

  .title {
    width: 100%;
    margin-bottom: 5rem;

    h2 {
      ${H2LatoBlue};
      margin-bottom: 0;
    }
  }

  .location {
    width: 100%;

    &__title {
      h3 {
        ${H4LatoGold};
      }
    }

    &__details {
      p {
        ${B1OpenSansBlue};
        font-weight: bold;
      }
    }
  }

  .link {
    margin-top: 5rem;
    a {
      ${buttonOneWhite};
    }
  }
`

const TimesLocation = ({ timesLocations }) => {
  return (
    <TimesLocationSection>
      <div className="wrapper">
        <div className="mainContent">
          <div className="title">
            <h2>Service Times & Locations</h2>
          </div>
          {timesLocations.acf._wfc_tal_times.map((item, index) => {
            return (
              <div className="location" key={index}>
                <div className="location__title">
                  <h3>{item.title}</h3>
                </div>
                <div
                  className="location__details"
                  dangerouslySetInnerHTML={{ __html: item.details }}
                />
              </div>
            )
          })}
          <div className="link">
            <Link to="/events/open-air-church">More Info</Link>
          </div>
        </div>
      </div>
    </TimesLocationSection>
  )
}

export default TimesLocation
