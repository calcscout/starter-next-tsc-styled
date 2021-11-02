/* eslint-disable @typescript-eslint/no-var-requires */
// import generateSitemap from './scripts/generate-sitemap.mjs';
// const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');

const withConfig = nextTranslate({
  webpack(config, { isServer }) {
    if (isServer) {
      // generateSitemap();
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  inlineStyles: false
                }
              ]
            }
          }
        }
      ]
    });
    return config;
  }
});

module.exports = {
  ...withConfig,
  images: {
    domains: ['lh3.googleusercontent.com']
  }
};
