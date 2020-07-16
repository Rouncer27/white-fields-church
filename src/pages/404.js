import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { standardWrapper, buttonOneBlue } from "../styles/helpers"

const Main404 = styled.section`
  .wrapper {
    ${standardWrapper};
    padding: 10rem 2rem;
  }

  div {
    width: 100%;
    text-align: center;
  }

  a {
    ${buttonOneBlue};
  }
`

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <Main404>
      <div className="wrapper">
        <div>
          <h1>NOT FOUND</h1>
        </div>
        <div>
          <p>You just hit a page that doesn&#39;t exist.</p>
          <Link to="/">Home</Link>
        </div>
      </div>
    </Main404>
  </Layout>
)

export default NotFoundPage
