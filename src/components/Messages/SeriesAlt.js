import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import BrushStrokeSeven from "../Graphics/BrushStrokeSeven"
import BrushStrokeFour from "../Graphics/BrushStrokeFour"
import SeriesItemAlt from "./SeriesItemAlt"
import Img from "gatsby-image"
import { Link } from "gatsby"
import {
  B2OpenSansWhite,
  buttonOneClear,
  H1LatoWhite,
} from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

const SeriesSection = styled.section`
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-bottom: 10rem;
  }

  .wrapper {
    width: ${props => 100 * props.length}%;
    height: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: no-wrap;
    overflow: hidden;
  }
`

const SeriesItemStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vw;

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
        ${H1LatoWhite};
      }
    }

    &__button {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: all 0.3s ease-out;
      transform: translate(-50%, 100%);
      opacity: 0;
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
      transition: all 0.3s ease-out;
      background-color: rgba(55, 93, 119, 0.4);
      z-index: 5;
    }
  }

  &:hover {
    .title__button {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .title__background {
      background-color: rgba(55, 93, 119, 0.8);
    }
  }
`

const Series = ({ series }) => {
  useEffect(() => {
    const items = [...document.querySelectorAll(".sectionItem")]
    gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: "none",
      duration: 10,
      scrollTrigger: {
        trigger: "#seriesContainer",
        markers: true,
        pin: true,
        scrub: 1,
        snap: 1 / (items.length - 1),
        end: () =>
          "+=" + document.querySelector("#seriesContainer").offsetWidth,
      },
    })
  }, [])

  return (
    <SeriesSection length={series.edges.length}>
      <div id="seriesContainer" className="wrapper">
        {series.edges.map(item => (
          <SeriesItemStyled
            className="sectionItem"
            key={item.node.wordpress_id}
          >
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
          </SeriesItemStyled>
        ))}
      </div>
    </SeriesSection>
  )
}

export default Series
