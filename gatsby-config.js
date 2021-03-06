// Used to read secrets from the .env file
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Christine Lao, Personal Website',
    description: `A software engineer that's constantly striving to build
      elegant, flexible solutions that are beautiful inside and out.`,
    author: `@chlao`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ChristineLao`,
        short_name: `ChristineLao`,
        start_url: `/`,
        background_color: `#ed5500`,
        theme_color: `#ed5500`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src", "src/styles"]
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-root-import'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
