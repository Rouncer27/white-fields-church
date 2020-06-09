import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import IntroQuote from "../components/Missions/IntroQuote"
import ContentBlocks from "../components/Missions/ContentBlocks"
import Churches from "../components/Missions/Churches"

const Mission = props => {
  const { seoInfo, quoteSection, contentBlocks, churches } = props.data
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
      <Churches churches={churches} />
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
    churches: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_chas_churches_associated {
          name
          decription
        }
        _wfc_chas_information_questions
        _wfc_chas_image {
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
  }
`

export default Mission
