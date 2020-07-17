import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { B2OpenSansWhite, buttonOneClear } from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * Math.floor(max)) + min
}

const SeriesItemStyled = styled.div`
  position: relative;
  width: calc(100%);
  margin: 2rem auto;
  box-shadow: 0 0.45rem 0.75rem 0 rgba(0, 0, 0, 0.56);

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  @media (min-width: 1025px) {
    width: calc(
      ${props =>
          props.widthValue === 3
            ? 33.333333
            : props.widthValue === 2
            ? 50
            : 66.666666}% - 4rem
    );
    margin: 5rem 2rem;
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

const SeriesItem = ({ item, itemIndex }) => {
  const element = useRef(null)

  useEffect(() => {
    gsap.set(element.current, { y: 400, autoAlpha: 0 })
    gsap.to(element.current, {
      // y: 100,
      y: 0,
      autoAlpha: 1,
      duration: 0.75,
      // onComplete: () => startPara(),
      scrollTrigger: {
        trigger: `.item-${itemIndex}`,
        start: "top 90%",
        markers: false,
        scrub: false,
      },
    })
  }, [])

  const startPara = () => {
    gsap.to(element.current, {
      y: -100,
      scrollTrigger: {
        trigger: `.item-${itemIndex}`,
        start: "top 100%",
        end: "bottom 0%",
        markers: false,
        scrub: 1.25,
      },
    })
  }

  return (
    <SeriesItemStyled
      key={item.node.wordpress_id}
      ref={element}
      widthValue={2}
      className={`item-${itemIndex}`}
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
            <h2 dangerouslySetInnerHTML={{ __html: item.node.name }} />
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
