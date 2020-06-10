import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { B2OpenSansWhite, buttonOneClear } from "../../styles/helpers"

const SeriesItemStyled = styled.div`
  position: relative;
  width: 100vw;
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

const SeriesItemAlt = ({ item }) => {
  return (
    <SeriesItemStyled key={item.node.wordpress_id}>
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

export default SeriesItemAlt
