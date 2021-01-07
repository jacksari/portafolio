import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
    <SEO title="404" description="This is our error404 page portafolio JackSari"/>
    <main className="error-page">
      <div className="error-container">
        <h1>Oops it´s a dead end</h1>
        <Link to="/" className="btn center-btn">back home</Link>
      </div>
    </main>
  </Layout>
}

export default Error
