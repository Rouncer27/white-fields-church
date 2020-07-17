import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SeriesHero from "../components/SingleMessage/SeriesHero"
import MessagesList from "../components/SingleMessage/MessagesList"

const Series = props => {
  const { series, messages } = props.data
  const location = props.location

  return (
    <Layout location={location}>
      <SEO title={"messages"} />
      <SeriesHero series={series} />
      <MessagesList series={series} messages={messages} />
    </Layout>
  )
}

export const seriesQuery = graphql`
  query seriesPage($id: Int!) {
    series: wordpressWpMessageType(wordpress_id: { eq: $id }) {
      name
      wordpress_id
      acf {
        _wfc_mescat_featured_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    messages: allWordpressWpAudioMessages(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          message_type
          acf {
            _wfc_mespod_audio_embed
            _wfc_messages_video_link_req
            _wfc_messages_video_link
          }
        }
      }
    }
  }
`
export default Series
