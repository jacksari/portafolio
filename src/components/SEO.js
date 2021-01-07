import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query)
  const {author,siteDesc,image,siteUrl,siteTitle,twitterUsername} = site.siteMetadata
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc}/>

    <meta name="image" content={image}/>
    <meta name="keywords" content="Portafolio, Jack Sari, Jack Anthony Sánchez Rivera, React, Frontend"/>
    <meta name="author" content={author} />
    <meta name="copyright" content="Propietario del copyright" />
    {/* twitter card*/}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content={twitterUsername}/>
    <meta name="twitter:title" content={siteTitle}/>
    <meta name="twitter:description" content={siteDesc}/>
    <meta name="twitter:image" content={`${siteUrl}${image}`}/>
  </Helmet>
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

export default SEO
