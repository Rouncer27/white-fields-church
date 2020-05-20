import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { colors, standardWrapper, headlineTwo } from "../../styles/helpers"
import Play from "../Icons/Play"

const BannerLiveStreamSection = styled.section`
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }

  .bannerContent {
    position: relative;
    text-align: center;

    h2 {
      ${headlineTwo};
      margin: 0;
      padding: 2rem;
      transition: all 0.3s ease-in;
      color: ${colors.white};
    }

    .playIcon {
      position: absolute;
      top: 3rem;
      right: -5rem;
    }

    a {
      &:hover {
        h2 {
          color: ${colors.colorTertiary};
        }

        .playIcon {
          .prefix__cls-1 {
            fill: ${colors.colorTertiary};
          }
        }
      }
    }
  }
`

const BannerLiveStream = () => {
  return (
    <BannerLiveStreamSection>
      <div className="wrapper">
        <div className="bannerContent">
          <Link to="/">
            <h2>Live Stream Sunday Service </h2>
            <div className="playIcon">
              <Play color={colors.white} />
            </div>
          </Link>
        </div>
      </div>
    </BannerLiveStreamSection>
  )
}

export default BannerLiveStream
