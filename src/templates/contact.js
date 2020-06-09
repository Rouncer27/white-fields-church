import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/Heros/HeroImage"
import TimesLocation from "../components/Contact/TimesLocation"
import ContactForm from "../components/Contact/ContactForm"

const Contact = props => {
  const { hero, timesLocations, contactForm, seoInfo } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <HeroImage hero={hero} />
      <TimesLocation timesLocations={timesLocations} />
      <ContactForm contactForm={contactForm} />
    </Layout>
  )
}

export const contactQuery = graphql`
  query contactPage($id: Int!) {
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

    timesLocations: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_tal_times {
          title
          details
        }
        _wfc_tal_directions
      }
    }

    contactForm: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_cofor_title
        _wfc_cofor_content
        _wfc_cofor_image {
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
    }
  }
`

export default Contact
