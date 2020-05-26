import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutHero from "../components/About/AboutHero"
import ContentBlockTop from "../components/About/ContentBlockTop"

const About = props => {
  const { aboutHero, contentBlockTop } = props.data
  return (
    <Layout>
      <SEO title="About us" />
      <AboutHero aboutHero={aboutHero} />
      <ContentBlockTop contentBlockTop={contentBlockTop} />
    </Layout>
  )
}

export const aboutQuery = graphql`
  query aboutPage($id: Int!) {
    aboutHero: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_mhs_hero_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _wfc_mhs_hero_title
      }
    }

    contentBlockTop: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_cbt_content
        _wfc_cbt_top_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _wfc_cbt_bot_image {
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

export default About
