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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portafolio Jack Sari",
        short_name: "JackSari",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/logo3.png", // This path is relative to the root of the site.
        // An optional attribute whichprovides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
