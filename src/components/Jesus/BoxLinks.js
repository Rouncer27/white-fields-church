import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import {
  colors,
  medWrapper,
  H2LatoBlue,
  B1OpenSansWhite,
  B2OpenSansWhiteBold,
  buttonOneWhite,
} from "../../styles/helpers"
import BrushStrokeFour from "../Graphics/BrushStrokeFour"
import { createSlug } from "../../utils/helperFunc"

const BoxLinksSection = styled.section`
  position: relative;
  padding: 4rem 0;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 10rem 0;
  }

  .wrapper {
    ${medWrapper};
    align-items: flex-start;
  }

  .title {
    width: 100%;
    margin: 3rem auto 7.5rem;
    text-align: center;

    h2 {
      ${H2LatoBlue};
      margin: 0;
      color: ${colors.colorPrimary};
    }
  }

  .calBtn {
    width: 100%;
    margin: 7.5rem auto 3rem;
    text-align: center;

    a {
      ${buttonOneWhite};
    }
  }

  .backgroundGraphic {
    position: absolute;
    bottom: -12.75rem;
    left: 2.5%;
    width: calc(249rem / 3);
    height: calc(216.3rem / 3);
    transform: rotate(-100deg);
    z-index: 1;
  }
`

const BoxLink = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem auto;
  transition: box-shadow 0.3s ease-in;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.26);
  z-index: 10;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
    margin: auto 2rem;
  }

  .content {
    padding: 1rem 3rem;
    transition: background-color 0.3s ease-in;
    background-color: ${colors.colorPrimary};
    text-align: center;

    h3 {
      ${B2OpenSansWhiteBold};
      transition: color 0.3s ease-in;
      text-transform: uppercase;
    }

    p {
      ${B1OpenSansWhite};
      transition: color 0.3s ease-in;
    }
  }

  &:hover {
    box-shadow: 0 0.75rem 1rem 0 rgba(0, 0, 0, 0.35);
    cursor: pointer;

    .content {
      background-color: ${colors.colorTertiary};
      h3 {
        color: ${colors.colorPrimary};
      }

      p {
        color: ${colors.colorPrimary};
      }
    }
  }
`

const BoxLinks = ({ boxLinks }) => {
  return (
    <BoxLinksSection>
      <div className="wrapper">
        {boxLinks.acf._wfc_bxlk_box_links.map((box, index) => {
          const slug = createSlug(box.link)
          return (
            <BoxLink key={index}>
              <Link to={`${slug === "/" ? slug : `/${slug}`}`}>
                <div>
                  <Img fluid={box.image.localFile.childImageSharp.fluid} />
                </div>
                <div className="content">
                  <div>
                    <h3>{box.title}</h3>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: box.description }} />
                </div>
              </Link>
            </BoxLink>
          )
        })}
      </div>
      <div className="backgroundGraphic">
        <BrushStrokeFour />
      </div>
    </BoxLinksSection>
  )
}

export default BoxLinks
