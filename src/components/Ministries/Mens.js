import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  colors,
  H2LatoGold,
  B1OpenSansWhite,
  buttonOneBlue,
} from "../../styles/helpers"
import QuoteMM from "../Quotes/QuoteMM"
import { Link } from "gatsby"

const MensSection = styled.section`
  position: relative;
  padding-bottom: 5rem;
  background: ${colors.colorPrimary};

  @media (min-width: 1025px) {
    padding-bottom: 0;
    background: linear-gradient(
      to left,
      ${colors.colorPrimary} 0%,
      ${colors.colorPrimary} 95%,
      ${colors.white} 95%,
      ${colors.white} 100%
    );
  }

  .wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;

    @media (min-width: 768px) {
      padding: 4rem 0;
    }
  }

  .content {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(55% - 3rem);
      margin-left: 3rem;
      margin-right: auto;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 65rem;
      margin-left: 5.5rem;
      margin-right: auto;
      padding: 5rem 0;
    }

    h2 {
      ${H2LatoGold};
      margin: 0;
      padding-bottom: 3rem;
    }

    p {
      ${B1OpenSansWhite};
    }

    .link {
      padding-top: 5rem;

      a {
        ${buttonOneBlue};
      }
    }

    .quote {
      padding-bottom: 3rem;
    }
  }

  .image {
    align-self: center;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(45%);
    }

    @media (min-width: 1024px) {
      width: calc(40%);
    }
  }
`

const Mens = ({ wfMens }) => {
  return (
    <MensSection>
      <div className="wrapper">
        <div className="image">
          <Img
            fluid={wfMens.acf._wfc_mm_image.localFile.childImageSharp.fluid}
            alt={wfMens.acf._wfc_mm_image.alt_text}
          />
        </div>
        <div className="content">
          <div>
            <h2>{wfMens.acf._wfc_mm_title}</h2>
          </div>
          <div className="quote">
            <QuoteMM />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: wfMens.acf._wfc_mm_content,
            }}
          />
          <div className="link">
            <Link to="/events">Event Calendar</Link>
          </div>
        </div>
      </div>
    </MensSection>
  )
}

export default Mens
