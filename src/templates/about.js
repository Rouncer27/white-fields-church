import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutHero from "../components/About/AboutHero"
import ContentBlockTop from "../components/About/ContentBlockTop"
import TheTeam from "../components/About/TheTeam"
import WeBelieve from "../components/About/WeBelieve"
import OurValues from "../components/About/OurValues"

const About = props => {
  const {
    seoInfo,
    aboutHero,
    contentBlockTop,
    theTeam,
    weBelieve,
    ourValues,
  } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <AboutHero aboutHero={aboutHero} />
      <ContentBlockTop contentBlockTop={contentBlockTop} />
      <TheTeam theTeam={theTeam} />
      <WeBelieve weBelieve={weBelieve} />
      <OurValues ourVlaues={ourValues} />
    </Layout>
  )
}

export const aboutQuery = graphql`
  query aboutPage($id: Int!) {
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

    theTeam: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_tts_the_team {
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
          name
          title
          description
        }
      }
    }

    weBelieve: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_wwb_title
        _wfc_wwb_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _wfc_wwb_points {
          point
        }
        _wfc_wwb_bot_sep_img {
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

    ourValues: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_ourval_title_copy
        _wfc_ourval_image_copy {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _wfc_ourval_points_copy {
          point
        }
        _wfc_ourval_bot_sep_img_copy {
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

export default About
