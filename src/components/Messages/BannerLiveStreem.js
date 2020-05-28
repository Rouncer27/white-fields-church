import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import {
  colors,
  standardWrapper,
  H2LatoWhite,
  H2LatoGold,
  B1OpenSansWhite,
  fonts,
} from "../../styles/helpers"
import Play from "../Icons/Play"

const BannerLiveStreamSection = styled.section`
  padding: 5rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }

  .bannerContent {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    &__title {
      width: 100%;
      @media (min-width: 768px) {
        width: calc(25%);
      }

      @media (min-width: 1025px) {
        width: calc(25%);
      }

      h2 {
        ${H2LatoGold};
        margin: 0;
      }
    }

    &__paragraph {
      width: 100%;
      @media (min-width: 768px) {
        width: calc(50%);
      }

      @media (min-width: 1025px) {
        width: calc(50%);
      }

      p {
        ${B1OpenSansWhite};
        margin: 0;
      }
    }

    &__link {
      width: 100%;
      text-align: center;

      @media (min-width: 768px) {
        width: calc(25%);
      }

      @media (min-width: 1025px) {
        width: calc(25%);
      }

      .playIcon {
        position: relative;
        width: 7.7rem;
        height: 7.7rem;
        margin: auto;
        border: 0.25rem solid ${colors.colorSecondary};
        border-radius: 50%;

        &::after {
          display: block;
          position: absolute;
          top: 50%;
          left: 55%;
          transform: translate(-50%, -50%);
          font-family: ${fonts.fontAwesome};
          font-size: 4rem;
          color: ${colors.colorSecondary};
          content: "\f04b";
        }
      }

      &:hover {
        .playIcon {
          .prefix__cls-1 {
            fill: ${colors.colorTertiary};
          }
        }
      }
    }
  }
`

const BannerLiveStream = ({ liveFeed }) => {
  console.log(liveFeed)
  return (
    <BannerLiveStreamSection>
      <div className="wrapper">
        <div className="bannerContent">
          <div className="bannerContent__title">
            <h2>Watch Live</h2>
          </div>
          <div
            className="bannerContent__paragraph"
            dangerouslySetInnerHTML={{
              __html: liveFeed.acf._wcf_lifee_content,
            }}
          />
          <Link className="bannerContent__link" to="/">
            <div className="playIcon" />
          </Link>
        </div>
      </div>
    </BannerLiveStreamSection>
  )
}

export default BannerLiveStream
