import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Header />
    <Link to="/about/">About</Link>
    <br />
    <Link to="/modules/">Modules</Link>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)
