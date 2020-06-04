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
      <SEO title="Series" />
      <SeriesHero series={series} />
      <MessagesList series={series} messages={messages} />
    </Layout>
  )
}

export const seriesQuery = graphql`
  query seriesPage($id: Int!) {
    series: wordpressWpMessageType(wordpress_id: { eq: $id }) {
      name
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

    messages: allWordpressWpAudioMessages {
      edges {
        node {
          acf {
            _wfc_mespod_audio_embed
          }
        }
      }
    }
  }
`
export default Series
