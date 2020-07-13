import React from "react"
import styled from "styled-components"
import { medWrapper, H2LatoBlue } from "../../styles/helpers"

const LiveFeedLinkSection = styled.section`
  .wrapper {
    ${medWrapper}
  }

  h2 {
    ${H2LatoBlue};
  }
`

const LiveFeedLink = ({ liveFeed }) => {
  console.log(liveFeed)
  return (
    <LiveFeedLinkSection>
      <div className="wrapper">
        <div>
          <h2>Live Feed</h2>
        </div>
      </div>
    </LiveFeedLinkSection>
  )
}

export default LiveFeedLink
