import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import MessagesIntro from "../components/Messages/MessagsIntro"
import BannerLiveStreem from "../components/Messages/BannerLiveStreem"
import Series from "../components/Messages/Series"

const Messages = props => {
  const { messagesIntro, liveFeed, series } = props.data
  return (
    <Layout>
      <SEO />
      <MessagesIntro messagesIntro={messagesIntro} />
      <BannerLiveStreem liveFeed={liveFeed} />
      <Series series={series} />
    </Layout>
  )
}

export const messagesQuery = graphql`
  query messagesPage($id: Int!) {
    messagesIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_evin_title
        _wfc_evin_content
        _wcf_evin_image {
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

    liveFeed: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wcf_lifee_content
        _wcf_lifee_url
      }
    }

    series: allWordpressWpMessageType {
      edges {
        node {
          acf {
            dummy
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

export default Messages
