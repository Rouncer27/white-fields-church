import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { colors, standardWrapper, H2LatoWhite } from "../../styles/helpers"
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
      ${H2LatoWhite};
      margin: 0;
      padding: 5rem 2rem;
      transition: all 0.3s ease-in;

      @media (min-width: 768px) {
        padding: 2rem;
      }
    }

    .playIcon {
      position: absolute;
      top: 5rem;
      right: -5rem;

      @media (min-width: 768px) {
        top: 2.5rem;
      }

      @media (min-width: 1025px) {
        top: 3rem;
      }
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
          <Link to="/live-feed">
            <h2>Live Stream</h2>
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
