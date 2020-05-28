import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SuggestedTopics from "../components/LiveFeed/SuggestedTopics"
import LiveFeedLink from "../components/LiveFeed/LiveFeedLink"

const LiveFeed = props => {
  const { suggestedTopics, liveFeed, series } = props.data
  return (
    <Layout>
      <SEO title="Live Feed" />
      <LiveFeedLink liveFeed={liveFeed} />
      <SuggestedTopics suggestedTopics={suggestedTopics} series={series} />
    </Layout>
  )
}

export const liveFeedQuery = graphql`
  query liveFeedPage($id: Int!) {
    liveFeed: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_linkfeed_life_feed
      }
    }

    suggestedTopics: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_sugtop_title
        _wfc_sugtop_content
      }
    }

    series: allWordpressWpMessageType {
      edges {
        node {
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
          wordpress_id
          slug
          name
          count
        }
      }
    }
  }
`

export default LiveFeed
