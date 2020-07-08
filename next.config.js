const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  distDir: 'build',
  target: 'serverless',
  env: {
    customKey: 'my-value',
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  typescript:{
    ignoreBuildErrors: true,
  }
}