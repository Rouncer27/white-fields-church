import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/Heros/HeroImage"
import WheatStockContent from "../components/Jesus/WheatStockContent"

const Jesus = props => {
  const { hero, wheatContent } = props.data
  return (
    <Layout>
      <SEO />
      <HeroImage hero={hero} />
      <WheatStockContent wheatContent={wheatContent} />
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
  }
`

export default Jesus
