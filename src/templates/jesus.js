import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/Heros/HeroImage"
import WheatStockContent from "../components/Jesus/WheatStockContent"
import NowWhat from "../components/Jesus/NowWhat"
import BoxLinks from "../components/Jesus/BoxLinks"

const Jesus = props => {
  const { seoInfo, hero, wheatContent, soNowWhat, boxLinks } = props.data
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
      <WheatStockContent wheatContent={wheatContent} />
      <NowWhat soNowWhat={soNowWhat} />
      <BoxLinks boxLinks={boxLinks} />
    </Layout>
  )
}

export const jesusQuery = graphql`
  query jesusPage($id: Int!) {
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

    boxLinks: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_bxlk_box_links {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          title
          description
          internal__external
          link
          url
        }
      }
    }
  }
`

export default Jesus
