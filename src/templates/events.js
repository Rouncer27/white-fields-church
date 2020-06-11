import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import EventsIntro from "../components/Events/EventsIntro"
import EventsCalendar from "../components/Events/EventsCalendar"

const Events = props => {
  const { seoInfo, eventsIntro } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <EventsIntro eventsIntro={eventsIntro} />
      <EventsCalendar />
    </Layout>
  )
}

export const eventsQuery = graphql`
  query eventsPage($id: Int!) {
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
    eventsIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _wfc_evin_title
        _wfc_evin_content
        _wcf_evin_image {
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

export default Events
