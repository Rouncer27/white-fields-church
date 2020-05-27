import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import { colors, H2LatoBlue, B1OpenSansBlue } from "../../styles/helpers"
import BrushStrokeFive from "../Graphics/BrushStrokeFive"

const ChurchesSection = styled.section`
  padding-bottom: 10rem;

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
  }

  .graphic {
    position: absolute;
    bottom: -5rem;
    right: -5rem;
    width: calc(236.2rem / 3);
    height: calc(82.9rem / 3);
    z-index: 5;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(30%);
    }

    @media (min-width: 1024px) {
      width: calc(30%);
    }

    &__background {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    }

    &__graphic {
      position: absolute;
      top: 2rem;
      left: -2rem;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorTertiary};
      opacity: 0.2;
      z-index: 1;
    }
  }

  .content {
    position: relative;
    width: 100%;
    padding: 2rem;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(100%);
      margin-right: auto;
      margin-left: auto;
      padding: 2rem 10rem;
    }

    @media (min-width: 1024px) {
      width: calc(70% - 5.5rem);
      max-width: 60rem;
      margin-right: auto;
      margin-left: calc(30% + 5.5rem);
      padding: 8.5rem 0;
      padding-left: 2rem;
    }

    &__block {
      &--title {
        h2 {
          ${H2LatoBlue};
        }
      }

      &--content {
        p {
          ${B1OpenSansBlue};
        }
      }
    }

    &__information {
      p {
        ${B1OpenSansBlue};
      }
    }
  }
`

const Churches = ({ churches }) => {
  return (
    <ChurchesSection>
      <div className="wrapper">
        <div className="image">
          <BGImg
            tag="div"
            className="image__background"
            fluid={churches.acf._wfc_chas_image.localFile.childImageSharp.fluid}
          />
          <div className="image__graphic" />
        </div>
        <div className="content">
          {churches.acf._wfc_chas_churches_associated.map((church, index) => {
            return (
              <div className="content__block" key={index}>
                <div className="content__block--title">
                  <h2>{church.name}</h2>
                </div>
                <div
                  className="content__block--content"
                  dangerouslySetInnerHTML={{ __html: church.decription }}
                />
              </div>
            )
          })}
          <div
            className="content__information"
            dangerouslySetInnerHTML={{
              __html: churches.acf._wfc_chas_information_questions,
            }}
          />
        </div>
        <div className="graphic">
          <BrushStrokeFive />
        </div>
      </div>
    </ChurchesSection>
  )
}

export default Churches
