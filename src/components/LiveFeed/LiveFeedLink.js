import React from "react"
import styled from "styled-components"
import { medWrapper, H2LatoBlue, B1OpenSansBlue } from "../../styles/helpers"
import YoutubeImage from "../Graphics/YoutubeImage"

const LiveFeedLinkSection = styled.section`
  .wrapper {
    ${medWrapper}
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2LatoBlue};
    }

    p {
      ${B1OpenSansBlue};
    }
  }

  .image {
    width: 100%;
    max-width: 75rem;
    margin: 2rem auto;
    text-align: center;
  }
`

const LiveFeedLink = ({ liveFeed }) => {
  return (
    <LiveFeedLinkSection>
      <div className="wrapper">
        <div className="title">
          <h2>Live Stream</h2>
          <p>Live Stream available Sundays at 11am</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={liveFeed.acf._wfc_linkfeed_life_feed}
          className="image"
        >
          <YoutubeImage />
        </a>
      </div>
    </LiveFeedLinkSection>
  )
}

export default LiveFeedLink
