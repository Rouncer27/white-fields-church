import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import MinistriesHero from "../components/Ministries/MinistriesHero"

const Ministries = props => {
  const { hero } = props.data
  return (
    <Layout>
      <SEO title="Ministries Page" />
      <MinistriesHero hero={hero} />
    </Layout>
  )
}

export const ministriesQuery = graphql`
  query ministriesPage($id: Int!) {
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
  }
`

export default Ministries
