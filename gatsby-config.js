/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "JackSari Portafolio",
    description: "This is JackSari Portfolio ",
    author: "@jacksari",
    twitterUsername: "@sari_jack",
    image: "/twitter-img.png",
    siteUrl: "https://jacksari.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portafolio-api-app.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`,`projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
     {
       resolve: `gatsby-plugin-webfonts`,
       options: {
         fonts: {
           google: [
             {
               family: "Roboto",
               variants: ["400", "700"],
             },
             { family: "Open Sans" },

           ],
         },
       },
     },
  ],
}
