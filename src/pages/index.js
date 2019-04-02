import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Header />
    <Link to="/about/">About</Link>
    <br />
    <Link to="/modules/">Modules</Link>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
)
