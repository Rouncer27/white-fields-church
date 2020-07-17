import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import MessagesIntro from "../components/Messages/MessagsIntro"
import BannerLiveStreem from "../components/Messages/BannerLiveStreem"
import Series from "../components/Messages/Series"

const Messages = props => {
  const { seoInfo, messagesIntro, liveFeed, series } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <MessagesIntro messagesIntro={messagesIntro} />
      <BannerLiveStreem liveFeed={liveFeed} />
      <Series series={series} />
    </Layout>
  )
}

export const messagesQuery = graphql`
  query messagesPage($id: Int!) {
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

    series: allWordpressWpMessageType(sort: { fields: slug }) {
      edges {
        node {
          acf {
            dummy
            _wfc_mescat_featured_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
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
