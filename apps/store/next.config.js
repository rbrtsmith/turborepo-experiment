/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@my-fancy-org/ui']);
module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
