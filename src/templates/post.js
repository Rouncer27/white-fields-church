import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Post = props => {
  const location = props.location
  return (
    <Layout location={location}>
      <SEO />
      <h1>Post</h1>
    </Layout>
  )
}

export default Post
