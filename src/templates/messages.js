import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import MessagesIntro from "../components/Messages/MessagsIntro"
import BannerLiveStreem from "../components/Messages/BannerLiveStreem"

const Messages = props => {
  const { messagesIntro, liveFeed } = props.data
  return (
    <Layout>
      <SEO />
      <MessagesIntro messagesIntro={messagesIntro} />
      <BannerLiveStreem liveFeed={liveFeed} />
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
  }
`

export default Messages
