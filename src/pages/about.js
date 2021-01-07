import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid
const About = ({data:{about:{nodes}}}) => {
  const {title, stack, info, image} = nodes[0]
  return <Layout>
    <SEO title="About me" description="This is our about page portafolio JackSari"/>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img"/>
        <article className="about-text">
          <Title title={title}/>
          <ReactMarkdown source={info}/>
          <div className="about-stack">
            {
              stack.map((item,index)=>{
                return <span key={index} className="">{item.name}</span>
              })
            }
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          name
        }
        title
        info
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


export default About
