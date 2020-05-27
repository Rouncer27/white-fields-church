import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/Heros/HeroImage"
import WheatStockContent from "../components/Jesus/WheatStockContent"
import NowWhat from "../components/Jesus/NowWhat"

const Jesus = props => {
  const { hero, wheatContent, soNowWhat } = props.data
  return (
    <Layout>
      <SEO title="Why Jesus?" />
      <HeroImage hero={hero} />
      <WheatStockContent wheatContent={wheatContent} />
      <NowWhat soNowWhat={soNowWhat} />
    </Layout>
  )
}

export const jesusQuery = graphql`
  query jesusPage($id: Int!) {
    hero: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_min_hero_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _wfc_min_hero_title
      }
    }

    wheatContent: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_whsto_main_content
      }
    }

    soNowWhat: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_snw_title
        _wfc_snw_content
        _wcf_snw_image {
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
  }
`

export default Jesus
