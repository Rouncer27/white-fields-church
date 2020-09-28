import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SuggestedTopics from "../components/LiveFeed/SuggestedTopics"
import LiveFeedLink from "../components/LiveFeed/LiveFeedLink"

const LiveFeed = props => {
  const { seoInfo, suggestedTopics, liveFeed, series } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <LiveFeedLink liveFeed={liveFeed} />
      <SuggestedTopics suggestedTopics={suggestedTopics} series={series} />
    </Layout>
  )
}

export const liveFeedQuery = graphql`
  query liveFeedPage($id: Int!) {
    seoInfo: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _swb_theme_meta_title
        _swb_theme_description
        _swb_theme_image {
          localFile {
            publicURL
          }
        }
      }
    }

    liveFeed: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_linkfeed_life_feed
        _wfc_linkfeed_embed_link
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
            _wfc_mescat_set_suggested
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
