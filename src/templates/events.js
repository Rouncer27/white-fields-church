import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import EventsIntro from "../components/Events/EventsIntro"

const Events = props => {
  const { eventsIntro } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO />
      <EventsIntro eventsIntro={eventsIntro} />
    </Layout>
  )
}

export const eventsQuery = graphql`
  query eventsPage($id: Int!) {
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
