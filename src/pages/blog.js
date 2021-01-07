import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({data:{allStrapiBlogs:{nodes: blogs}}}) => {

  return <Layout >
    <SEO title="Blogs" description="This is our blog page portafolio JackSari"/>
    <section className="blog-page">
      <Blogs title="all blogs" blogs={blogs}/>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        date
        category
        desc
        slug
        content
        createdAt(formatString: "MM Do, YYYY")
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
