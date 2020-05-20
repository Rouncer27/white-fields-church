import React from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { Link } from "gatsby"

import {
  colors,
  headlineTwo,
  bodyCopyTwo,
  buttonOneAlt,
} from "../../styles/helpers"
import { createSlug } from "../../utils/helperFunc"

const OurMissionsSection = styled.section`
  background-color: ${colors.white};

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content {
    width: 100%;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(50%);
    }

    &__inner {
      width: 100%;
      max-width: 41rem;
      margin-right: 6.5rem;
      margin-left: auto;
      padding: 2rem;

      @media (min-width: 768px) {
        padding: 5rem 1rem;
      }
    }

    &__title {
      h2 {
        ${headlineTwo};
        color: ${colors.colorSecondary};
      }
    }

    &__para {
      padding: 2rem 0;
      p {
        ${bodyCopyTwo};
        color: ${colors.white};
      }
    }

    &__link {
      a {
        ${buttonOneAlt};
      }
    }
  }

  .image {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
      min-height: 40rem;
    }

    &__background {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const OurMissions = ({ ourMission }) => {
  const title = ourMission.acf._wfc_om_title
  const content = ourMission.acf._wfc_om_content
  const imgFluid = ourMission.acf._wfc_om_image.localFile.childImageSharp.fluid
  const btnLink = ourMission.acf._wfc_om_button_link
  const slug = createSlug(btnLink)

  return (
    <OurMissionsSection id="boxTrigger">
      <div className="wrapper">
        <div className="content">
          <div className="content__inner">
            <div className="content__title">
              <h2>{title}</h2>
            </div>
            <div
              className="content__para"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="content__link">
              <Link to={`/${slug}`}>Learn More</Link>
            </div>
          </div>
        </div>
        <div className="image">
          <BGImg tag="div" fluid={imgFluid} className="image__background" />
        </div>
      </div>
    </OurMissionsSection>
  )
}

export default OurMissions
