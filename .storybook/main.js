const path = require("path");
module.exports = {
  "framework": "@storybook/vue",
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['~storybook'] = path.resolve(__dirname)
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: ["style-loader", "css-loader", {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            indentedSyntax: true,
          },
          prependData: "@import '@/styles/main.scss'",
        },
      }],
      include: path.resolve(__dirname, "../")
    });
    return config;
  }
}