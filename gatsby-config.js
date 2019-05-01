module.exports = {
    siteMetadata: {
        title: `Prywatny Gabinet Psychiatryczny`,
        subtitle: `Lek. Med. Małgorzata Synowiec`,
        description: `Strona Prywatnego Gabinetu Psychiatrycznego Lek. Med. Małgorzata Synowiec.`,
        author: `@shnek`,
    },
    pathPrefix: '/pgpms',
    plugins: [
        `gatsby-plugin-react-helmet`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#243795`,
                theme_color: `#243795`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
    ],
}