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
    align-items: center;
  }

  div.sap-embed-player {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }
  div.sap-embed-player > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .prevTitle {
    width: 100%;
    margin-bottom: 3rem;
    text-align: center;
    h2 {
      ${H2LatoBlue};
    }
  }

  .content {
    width: 100%;
    @media (min-width: 768px) {
      width: calc(35% - 5rem);
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
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    @media (min-width: 768px) {
      width: calc(65%);
    }
  }
`

const Topic = styled.div`
  position: relative;
  width: calc(100%);
  height: 20rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    width: calc(25%);
    height: 17.5rem;
    margin-bottom: 0;
  }

  @media (min-width: 1025px) {
    height: 17.5rem;
  }

  .prevTitle {
    width: 100%;
    h2 {
      ${H4LatoWhite};
    }
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
  const notSuggestedTeaching = series.edges.filter(item => {
    if (!item.node.acf._wfc_mescat_set_suggested) return true
  })
  const allNonShuffled = notSuggestedTeaching.sort(() => 0.5 - Math.random())

  const suggestedTeachings = series.edges.filter(item => {
    if (item.node.acf._wfc_mescat_set_suggested) return true
  })

  if (suggestedTeachings.length < 4) {
    const numToAdd = 4 - suggestedTeachings.length
    for (var i = 0; i < numToAdd; i++) {
      suggestedTeachings.push(allNonShuffled[i])
    }
  }

  const shuffled = suggestedTeachings.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 4)

  return (
    <SuggestedTopicsSection>
      <div className="wrapper">
        {/* <div className="content">
          <div>
            <h2>{suggestedTopics.acf._wfc_sugtop_title}</h2>
          </div>
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
        </div> */}
        <div className="prevTitle">
          <h2>Previous Service</h2>
        </div>
        <div className="sap-embed-player">
          <iframe
            src="https://subsplash.com/+t639/embed/mi/*recent?audio&video&info&logoWatermark&shareable&embeddable"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </SuggestedTopicsSection>
  )
}

export default SuggestedTopics
