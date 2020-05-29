import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
// Animations Packages. //
import * as ScrollMagic from "scrollmagic"
import gsap from "gsap"
// import addIndicators from "debug.addIndicators"
import { B2OpenSansWhite, buttonOneClear } from "../../styles/helpers"

const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * Math.floor(max)) + min
}

const SeriesItemStyled = styled.div`
  position: relative;
  width: calc(100%);
  margin: 2rem auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.26);

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  @media (min-width: 1025px) {
    width: calc(
      50% - ${props => props.marginValues.marginRight}rem -
        ${props => props.marginValues.marginLeft}rem
    );
    margin: 5rem 2rem;
    margin-top: ${props => props.marginValues.marginTop}rem;
    margin-right: ${props => props.marginValues.marginRight}rem;
    margin-bottom: ${props => props.marginValues.marginBottom}rem;
    margin-left: ${props => props.marginValues.marginLeft}rem;
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
      transition: all 0.4s ease-out;
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
      transition: all 0.4s ease-out;
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

const SeriesItem = ({ item }) => {
  const [marginValues, setMarginValues] = useState({
    marginTop: 5,
    marginRight: 2,
    marginBottom: 5,
    marginLeft: 2,
  })
  const element = useRef(null)

  useEffect(() => {
    const marginTop = getRandomInt(10, 5)
    const marginRight = getRandomInt(5, 2)
    const marginBottom = getRandomInt(10, 5)
    const marginLeft = getRandomInt(5, 2)
    setMarginValues({ marginTop, marginRight, marginBottom, marginLeft })

    const controller = new ScrollMagic.Controller()
    const timeLine = gsap
      .timeline()
      .fromTo(
        element.current,
        { y: getRandomInt(250, 100), duration: 1, ease: "none" },
        { y: 0, duration: 1, ease: "none" }
      )

    new ScrollMagic.Scene({
      duration: 1500,
      offset: 0,
      triggerHook: 1,
      triggerElement: element.current,
      reverse: true,
    })
      .setTween(timeLine)
      // .addIndicators()
      .addTo(controller)
  }, [])

  return (
    <SeriesItemStyled
      key={item.node.wordpress_id}
      ref={element}
      marginValues={marginValues}
    >
      <Link to={`/series/${item.node.slug}`}>
        <div className="image">
          <Img
            fluid={
              item.node.acf._wfc_mescat_featured_image.localFile.childImageSharp
                .fluid
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
  )
}

export default SeriesItem
