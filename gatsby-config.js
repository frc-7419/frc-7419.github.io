plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'none',
              disableBgImage: true
            }
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              dataAttributes: true
            }
          }
        ]
      }
    }
  ]