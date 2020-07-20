import React from "react"
import styled from "styled-components"
import { colors, footerType, fonts } from "../../styles/helpers"

const FooterSocial = styled.div`
  text-align: right;
  p,
  a {
    ${footerType};
    color: ${colors.white};
    margin: 0;
  }

  a {
    display: inline-block;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;

    &:last-of-type {
      margin-left: 1rem;
    }

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
      color: rgba(255, 255, 255, 0.5);
      font-family: ${fonts.fontAwesome};
      font-size: 1.25em;
    }

    &:hover {
      &::after {
        color: rgba(222, 180, 110, 1);
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
`

const FooterRightSocial = () => {
  return (
    <FooterSocial>
      <p>
        Follow us on Social Media:{" "}
        <a
          href="https://facebook.com"
          className="facebookIcon"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook Account"
        >
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
      </p>
    </FooterSocial>
  )
}

export default FooterRightSocial
