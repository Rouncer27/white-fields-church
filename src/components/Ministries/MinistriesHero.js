import React from "react"
import BGImage from "gatsby-background-image"
import styled from "styled-components"
import { H1LatoWhite } from "../../styles/helpers"

const HeroImage = styled.section`
  position: relative;
  min-height: 40rem;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 50rem;
  }

  @media (min-width: 1025px) {
    min-height: 67.5rem;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 5;

    h2 {
      ${H1LatoWhite};
      margin: 0;
    }
  }

  .hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__image {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const MinistriesHero = ({ hero }) => {
  return (
    <HeroImage>
      <div className="title">
        <h2>{hero.acf._wfc_min_hero_title}</h2>
      </div>
      <div className="hero">
        <BGImage
          tag="div"
          className="hero__image"
          fluid={hero.acf._wfc_min_hero_img.localFile.childImageSharp.fluid}
        />
      </div>
    </HeroImage>
  )
}

export default MinistriesHero
