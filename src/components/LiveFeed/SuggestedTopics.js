import React from "react"
import styled from "styled-components"
import BGImage from "gatsby-background-image"
import { Link } from "gatsby"
import {
  medWrapper,
  H2LatoBlue,
  B1OpenSansBlue,
  H4LatoWhite,
  colors,
} from "../../styles/helpers"

const SuggestedTopicsSection = styled.section`
  padding: 5rem 0;
  .wrapper {
    ${medWrapper};
  }

  .content {
    width: 100%;
    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-right: 5rem;
    }

    h2 {
      ${H2LatoBlue};
    }

    p {
      ${B1OpenSansBlue};
    }
  }

  .suggestions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

const Topic = styled.div`
  position: relative;
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc(33.33%);
    height: 175rem;
  }

  @media (min-width: 1025px) {
    height: 17.5rem;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    transition: all 0.3s ease;
    background-color: rgba(55, 93, 119, 0.25);
    text-align: center;
    z-index: 5;

    h3 {
      ${H4LatoWhite};
    }
  }

  .image {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &__background {
      position: absolute !important;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    .title {
      background-color: rgba(55, 93, 119, 1);
    }
  }
`

const SuggestedTopics = ({ suggestedTopics, series }) => {
  const shuffled = series.edges.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 3)

  return (
    <SuggestedTopicsSection>
      <div className="wrapper">
        <div className="content">
          <div>
            <h2>{suggestedTopics.acf._wfc_sugtop_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: suggestedTopics.acf._wfc_sugtop_content,
            }}
          />
        </div>
        <div className="suggestions">
          {selected.map(item => {
            return (
              <Topic key={item.node.wordpress_id}>
                <Link to={`/series/${item.node.slug}`}>
                  <div className="title">
                    <h3>{item.node.name}</h3>
                  </div>
                  <div className="image">
                    <BGImage
                      tag="div"
                      className="image__background"
                      fluid={
                        item.node.acf._wfc_mescat_featured_image.localFile
                          .childImageSharp.fluid
                      }
                    />
                  </div>
                </Link>
              </Topic>
            )
          })}
        </div>
      </div>
    </SuggestedTopicsSection>
  )
}

export default SuggestedTopics