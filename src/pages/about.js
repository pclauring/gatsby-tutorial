// import React from "react"
// import Header from "../components/header"
// import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <Header />
//     <h1>About Gatsby</h1>
//     <p>Such wow. Very React.</p>
//     </Layout>
// )

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
