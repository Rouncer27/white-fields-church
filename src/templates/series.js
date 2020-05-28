import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Series = props => {
  const { series } = props.data

  return (
    <Layout>
      <SEO title="Series" />
      <h1>{series.name}</h1>
    </Layout>
  )
}

export const seriesQuery = graphql`
  query seriesPage($id: Int!) {
    series: wordpressWpMessageType(wordpress_id: { eq: $id }) {
      name
    }
  }
`
export default Series
