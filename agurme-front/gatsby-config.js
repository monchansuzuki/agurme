module.exports = {
    siteMetadata: {
        title: `Agurme`,
        description: `茅ヶ崎にある美味しいレストラン`,
        author: `@tamon`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `あグルメ`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `rgba(247, 242, 1, 0.16)`,
                theme_color: `#fff`,
                display: `minimal-ui`,
                icon: `src/images/agrume_logo.jpeg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: 'gatsby-plugin-sass',
            options: {}
        },
        `gatsby-plugin-scroll-reveal`
        ,
        `gatsby-plugin-anchor-links`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
