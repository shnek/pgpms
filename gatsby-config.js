module.exports = {
  siteMetadata: {
    title: "Prywatny Gabinet Psychiatryczny",
    author: "Jakub and Agnieszka",
    description: "Lek. Med. Małgorzata Synowiec"
  },
  pathPrefix: `/pgpms`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Prywatny Gabinet Psychiatryczny Lek Med Malgorzata Synowiec',
        short_name: 'PGPMS',
        start_url: '/pgpms',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
