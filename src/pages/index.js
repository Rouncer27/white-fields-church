import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import VideoHero from "../components/Home/VideoHero"
import BannerLiveStream from "../components/Home/BannerLiveStream"
import CardLinks from "../components/Home/CardLinks"
import ContentWrapper from "../components/ContentWrapper"
import TimesLocation from "../components/Home/TimesLocation"
import RequestPrayer from "../components/Home/RequestPrayer"
import OurMissions from "../components/Home/OurMissions"
import HappeningNow from "../components/Home/HappeningNow"
import BannerSocialMedia from "../components/Home/BannerSocialMedia"

const IndexPage = props => {
  const {
    heroVideo,
    cardLinks,
    services,
    requestPrayer,
    ourMission,
    happeningNow,
  } = props.data
  const location = props.location

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <VideoHero
        logoDisplay={heroVideo.acf._wfc_hv_display_logo}
        quote={heroVideo.acf._wfc_hv_quote}
      />
      <BannerLiveStream />
      <CardLinks cards={cardLinks} />
      <ContentWrapper>
        <TimesLocation services={services} />
        <RequestPrayer requestPrayer={requestPrayer} />
      </ContentWrapper>
      <OurMissions ourMission={ourMission} />
      <HappeningNow happeningNow={happeningNow} />
      <BannerSocialMedia />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wordpressPage(slug: { eq: "home" }) {
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

    heroVideo: wordpressPage(slug: { eq: "home" }) {
      acf {
        _wfc_hv_display_logo
        _wfc_hv_quote
      }
    }

    cardLinks: wordpressPage(slug: { eq: "home" }) {
      acf {
        _wfc_card_links {
          title
          link
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1370) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }

    services: wordpressPage(slug: { eq: "home" }) {
      acf {
        _wfc_service_times {
          title
          details
        }
        _wfc_service_directions
      }
    }

    requestPrayer: wordpressPage(slug: { eq: "home" }) {
      acf {
        _wfc_rap_title
        _wfc_rap_content
      }
    }

    ourMission: wordpressPage(slug: { eq: "home" }) {
      acf {
        _wfc_om_title
        _wfc_om_content
        _wfc_om_button_link
        _wfc_om_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    happeningNow: wordpressPage(slug: { eq: "home" }) {
      acf {
        _wfc_hpn_title
        _wfc_hpn_events {
          title
          excerpt
          url
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
