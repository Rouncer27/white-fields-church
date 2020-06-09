import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SeriesHero from "../components/SingleMessage/SeriesHero"
import MessagesList from "../components/SingleMessage/MessagesList"

const Series = props => {
  const { seoInfo, series, messages } = props.data
  const location = props.location

  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <SeriesHero series={series} />
      <MessagesList series={series} messages={messages} />
    </Layout>
  )
}

export const seriesQuery = graphql`
  query seriesPage($id: Int!) {
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
