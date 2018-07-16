module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
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
