import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BGImg from "gatsby-background-image"

import { createSlug } from "../../utils/helperFunc"
import { H2LatoWhite } from "../../styles/helpers"
import Bible from "../Icons/Bible"
import Cross from "../Icons/Cross"
import Stars from "../Icons/Stars"

const CardStyled = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 40rem;
  transition: flex 0.3s linear;
  background: #fff;

  @media (min-width: 768px) {
    flex: 1;
    height: 50vw;

    &:hover {
      flex: 1.5;
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;

    &__icon {
      position: absolute;
      top: -7rem;
      right: 0;
      left: 0;

      svg {
        width: 100%;
      }

      &--2 {
        top: -15.25rem;
        width: 7.5rem;
        margin: 0 auto;
      }

      &--2 {
      }
    }

    h2 {
      ${H2LatoWhite};
      margin: 0 auto;
    }
  }

  .backgroundImage {
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

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4) 59%
      );
      z-index: 1;
    }
  }
`

const Card = ({ card, index }) => {
  const { title, link, image } = card
  const url = createSlug(link)
  const fluid = image.localFile.childImageSharp.fluid
  let icon

  if (index === 0) {
    icon = <Bible />
  } else if (index === 1) {
    icon = <Stars />
  } else {
    icon = <Cross />
  }

  return (
    <CardStyled>
      <Link to={`/${url}`}>
        <div className="content">
          <div className={`content__icon content__icon--${index}`}>{icon}</div>
          <h2>{title}</h2>
        </div>
        <div className="backgroundImage">
          <BGImg className="backgroundImage__image" tag="div" fluid={fluid} />
        </div>
        <div className="backgroundImage__overlay" />
      </Link>
    </CardStyled>
  )
}

export default Card
