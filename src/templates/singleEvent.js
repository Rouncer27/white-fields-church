import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { standardWrapper, H1LatoBlue, B1OpenSansBlue } from "../styles/helpers"

const SingleEventStyle = styled.article`
  .wrapper {
    ${standardWrapper};
  }

  .eventTitle {
    width: 100%;

    h1 {
      ${H1LatoBlue};
    }
  }

  .eventWysiwyg {
    width: 100%;

    p {
      ${B1OpenSansBlue};
    }
  }
`

const singleEvent = props => {
  const location = props.location
  const { event } = props.data
  console.log(event)
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <SingleEventStyle>
        <div className="wrapper">
          <div className="eventTitle">
            <h1>{event.title}</h1>
          </div>
          <div
            className="eventWysiwyg"
            dangerouslySetInnerHTML={{ __html: event.acf._wfcc_evepos_content }}
          />
        </div>
      </SingleEventStyle>
    </Layout>
  )
}

export const eventsPostQuery = graphql`
  query eventsPost($id: Int!) {
    event: wordpressWpEventsPost(wordpress_id: { eq: $id }) {
      title
      acf {
        _wfcc_evepos_content
        _wfcc_evepos_featured_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default singleEvent
