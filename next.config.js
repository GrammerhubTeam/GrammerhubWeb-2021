// next.config.js
const withCss = require("@zeit/next-css")

// const withSass = require("@zeit/next-sass")
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(
    withCSS(withSass({
        cssModules: true,
    })));

// {
//     webpack (config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000
//           }
//         }
//       })

//       return config
//     }
//   }