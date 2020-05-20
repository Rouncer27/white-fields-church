import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const DefaultPage = () => {
  return (
    <Layout>
      <SEO />
      <h1>DefaultPage</h1>
    </Layout>
  )
}

export default DefaultPage
