import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/Heros/HeroImage"

const Contact = props => {
  const { hero } = props.data
  return (
    <Layout>
      <SEO title="contact Page" />
      <HeroImage hero={hero} />
    </Layout>
  )
}

export const contactQuery = graphql`
  query contactPage($id: Int!) {
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

export default Contact
