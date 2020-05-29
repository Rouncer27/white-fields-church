import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import {
  standardWrapper,
  B2OpenSansWhite,
  buttonOneClear,
} from "../../styles/helpers"

import BrushStrokeSeven from "../Graphics/BrushStrokeSeven"
import BrushStrokeFour from "../Graphics/BrushStrokeFour"

const SeriesSection = styled.section`
  position: relative;
  overflow: hidden;
  .wrapper {
    ${standardWrapper};
  }

  .graphic {
    position: absolute;
    top: 5rem;
    right: -15rem;
    width: calc(346.4rem / 3.25);
    height: calc(425.3rem / 3.25);
    z-index: -1;

    @media (min-width: 768px) {
      left: -10rem;
      width: calc(346.4rem / 3);
      height: calc(425.3rem / 3);
    }

    @media (min-width: 1025px) {
      top: -25rem;
      width: calc(346.4rem / 4);
      height: calc(425.3rem / 4);
    }
  }

  .graphicTwo {
    position: absolute;
    bottom: 5rem;
    right: -15rem;
    width: calc(249rem / 4);
    height: calc(216.3rem / 4);
    z-index: -1;

    @media (min-width: 768px) {
      right: -10rem;
      width: calc(249rem / 4);
      height: calc(216.3rem / 4);
      transform: rotate(30deg);
    }

    @media (min-width: 1025px) {
      bottom: -35rem;
      width: calc(249rem / 1.6);
      height: calc(216.3rem / 1.6);
    }
  }
`

const SeriesItem = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50%);
  }

  @media (min-width: 1025px) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  .image {
    width: 100%;
  }

  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;

    &__content {
      position: relative;
      z-index: 10;

      h2 {
        ${B2OpenSansWhite};
      }
    }

    &__button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;

      button {
        ${buttonOneClear};
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(55, 93, 119, 0.5);
      z-index: 5;
    }
  }
`

const Series = ({ series }) => {
  console.log(series)
  return (
    <SeriesSection>
      <div className="wrapper">
        {series.edges.map(item => {
          return (
            <SeriesItem key={item.node.wordpress_id}>
              <Link to={`/series/${item.node.slug}`}>
                <div className="image">
                  <Img
                    fluid={
                      item.node.acf._wfc_mescat_featured_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={item.node.name}
                  />
                </div>
                <div className="title">
                  <div className="title__content">
                    <h2>{item.node.name}</h2>
                  </div>
                  <div className="title__button">
                    <button>View Series</button>
                  </div>
                  <div className="title__background" />
                </div>
              </Link>
            </SeriesItem>
          )
        })}
      </div>
      <div className="graphic">
        <BrushStrokeSeven />
      </div>
      <div className="graphicTwo">
        <BrushStrokeFour />
      </div>
    </SeriesSection>
  )
}

export default Series
