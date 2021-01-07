import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{ allStrapiProjects: { nodes: projects } }}) => {
  return <Layout>
    <SEO title="Projects" description="This is our projects page portafolio JackSari"/>
    <section className="projects-page">
      <Projects projects={projects} title="all projects"/>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          name
        }
      }
    }
  }
`


export default ProjectsPage
