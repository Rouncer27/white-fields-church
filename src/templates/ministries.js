import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/Heros/HeroImage"
import Kids from "../components/Ministries/Kids"
import Youth from "../components/Ministries/Youth"
import Adults from "../components/Ministries/Adults"
import BodyLife from "../components/Ministries/BodyLife"
import Mens from "../components/Ministries/Mens"
import Ladies from "../components/Ministries/Ladies"
import Worship from "../components/Ministries/Worship"
import Hospitality from "../components/Ministries/Hospitality"

const Ministries = props => {
  const {
    hero,
    wfKids,
    wfYouth,
    wfyAdults,
    wfBodyLife,
    wfMens,
    wfLadies,
    worship,
    hospitality,
  } = props.data
  return (
    <Layout>
      <SEO title="Ministries Page" />
      <HeroImage hero={hero} />
      <Kids wfKids={wfKids} />
      <Youth wfYouth={wfYouth} />
      <Adults wfyAdults={wfyAdults} />
      <BodyLife wfBodyLife={wfBodyLife} />
      <Mens wfMens={wfMens} />
      <Ladies wfLadies={wfLadies} />
      <Worship worship={worship} />
      <Hospitality hospitality={hospitality} />
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

    wfKids: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_wfk_title
        _wfc_wfk_kids_section {
          title
          content
        }
        _wfc_wfk_images {
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
      }
    }

    wfYouth: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_wfy_title
        _wfc_wfy_content
        _wfc_wfy_image {
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

    wfyAdults: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_wfya_title
        _wfc_wfya_content
        _wfc_wfya_image {
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
    wfBodyLife: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_blg_title
        _wfc_blg_contact
        _wfc_blg_image {
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

    wfMens: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_mm_title
        _wfc_mm_content
        _wfc_mm_image {
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

    wfLadies: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_lmi_title
        _wfc_lmi_content
        _wfc_lmi_image {
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

    worship: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_wor_title
        _wfc_wor_content
        _wfc_wor_image {
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

    hospitality: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_hos_title
        _wfc_hos_content
        _wfc_hos_image {
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

export default Ministries
