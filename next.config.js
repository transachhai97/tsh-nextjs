const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const withImages = require('next-images');

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
    [
        withImages
    ]
], nextConfig);
