import React from "react"
import styled from "styled-components"
import {
  colors,
  standardWrapper,
  H3LatoBlue,
  fonts,
} from "../../styles/helpers"

const SocialMedia = styled.div`
  background-color: ${colors.colorSecondary};

  .wrapper {
    ${standardWrapper};
    padding: 3rem 2rem;
  }

  .bannerContent {
    display: flex;
    align-items: center;
    justify-content: center;

    &__title {
      margin: auto 2rem;

      p {
        ${H3LatoBlue};
        margin: 0;
      }
    }

    &__icons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto 2rem;

      a {
        display: inline-block;
        position: relative;
        width: 3rem;
        height: 3rem;
        margin-right: 1.5rem;
        border-radius: 50%;
        background-color: ${colors.colorPrimary};

        span {
          position: absolute;
          top: 0;
          left: 9999999rem;
        }

        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(255, 255, 255, 1);
          font-family: ${fonts.fontAwesome};
          font-size: 1.75rem;
        }

        &:hover {
          background-color: ${colors.colorTertiary};
          &::after {
            color: ${colors.colorAccent};
          }
        }
      }

      a.facebookIcon {
        &::after {
          content: "\f09a";
        }
      }

      a.twitterIcon {
        &::after {
          content: "\f099";
        }
      }

      a.instagramIcon {
        &::after {
          content: "\f16d";
        }
      }
    }
  }
`

const BannerSocialMedia = () => {
  return (
    <SocialMedia>
      <div className="wrapper">
        <div className="bannerContent">
          <div className="bannerContent__title">
            <p>Social Media</p>
          </div>
          <div className="bannerContent__icons">
            <a
              href="https://facebook.com"
              className="facebookIcon"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Account"
            >
              {" "}
              <span>Facebook</span>
            </a>
            <a
              href="https://twitter.com/WFCCAirdrie"
              className="twitterIcon"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter Account"
            >
              <span>Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/whitefieldscalvarychurch/"
              className="instagramIcon"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Account"
            >
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </SocialMedia>
  )
}

export default BannerSocialMedia
