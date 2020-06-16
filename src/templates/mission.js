import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import IntroQuote from "../components/Missions/IntroQuote"
import ContentBlocks from "../components/Missions/ContentBlocks"
import OurMissions from "../components/Missions/OurMissions"

const Mission = props => {
  const { seoInfo, quoteSection, contentBlocks, ourMissions } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <IntroQuote quoteSection={quoteSection} />
      <ContentBlocks contentBlocks={contentBlocks} />
      <OurMissions ourMissions={ourMissions} />
    </Layout>
  )
}

export const missionQuery = graphql`
  query missionPage($id: Int!) {
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

    quoteSection: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_mqc_title
        _wfc_mqc_content
        _wcf_mqc_quote
        _wcf_mqc_image {
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
    contentBlocks: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_cnbl_blocks {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          content
        }
      }
    }

    ourMissions: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_orms_missions {
          title
          content
          button_required
          button_link
          image {
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
        _wfc_orms_questions
      }
    }
  }
`

export default Mission
