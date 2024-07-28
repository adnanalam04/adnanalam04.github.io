module.exports = {
  siteMetadata: {
    title: `Adnan Alam - Cybersecurity Expert`,
    description: `Portfolio and blog of Adnan Alam, showcasing expertise in cybersecurity, ethical hacking, and secure software development.`,
    author: `Adnan Alam`,
    siteUrl: `https://adnanalam.me`, // Updated to your custom domain
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adnan Alam - Cybersecurity Portfolio`,
        short_name: `Adnan Alam`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Ensure this file exists
      },
    },
    `gatsby-plugin-offline`, // For offline support
  ],
  // Remove the pathPrefix since you're using a custom domain
}
