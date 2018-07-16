module.exports = {
  siteMetadata: {
    title: 'Darren Cox\'s Site',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-transformer-remark',
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: './src/pages',
                name: "markdown-pages",
              }
            }],
}
