import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <Header />
//     <Link to="/about/">About</Link>
//     <br />
//     <Link to="/modules/">Modules</Link>
//     <p>
//       What do I like to do? Lots of course but definitely enjoy building
//       websites.
//     </p>
//   </Layout>
// )

export default () => (
  <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
  </Layout>
)
