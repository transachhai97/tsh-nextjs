const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');

const nextConfig = {
    // Target must be serverless
    target: 'serverless'
};

module.exports = withPlugins([
    [
        sass,
        {
            cssModules: true
        }
    ],
], nextConfig);
