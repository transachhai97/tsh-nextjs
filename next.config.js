const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const withImages = require('next-images');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer');

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
    ],
    [
        withSourceMaps
    ],
    [
        withBundleAnalyzer({
            enabled: process.env.ANALYZE === 'true',
        })
    ]
], nextConfig);
