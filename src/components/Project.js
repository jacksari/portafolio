import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({index,id,description,title,url,github,image,stack}) => {

  return <article className="project">
    {
      image && <Image fluid={image.childImageSharp.fluid} className="project-img"/>
    }
    <div className="project-info">
      <span className="project-number">{index + 1}</span>
      <h3>{title || 'default title'}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {
          stack.map((item,index)=>{
            return <span key={index}>{item.name}</span>
          })
        }
      </div>
      <div className="project-links">
        <a href={github} >
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={url} >
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
