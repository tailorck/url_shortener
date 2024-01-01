module.exports = {
  images: {
    domains: [
      'assign-guard-media.s3.amazonaws.com',
      'd2lh1mglzodl26.cloudfront.net',
    ],
  },
  env: {
    // declare here all your variables
    COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
    COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
    COGNITO_RANDOM_PASS: process.env.COGNITO_RANDOM_PASS,
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },

  async redirects() {
    return [
      {
        source: '/spy-glass',
        destination: '/ai-content-detection',
        permanent: true,
      },
      {
        source: '/help',
        destination:
          'https://instructify.notion.site/a9f8bb107e034d95b4dc83531cac84c5?v=9540183ab3384f42b9642c0e7d47c0cb&pvs=4',
        permanent: false,
      },
    ];
  },
};
