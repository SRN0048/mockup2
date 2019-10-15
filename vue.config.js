const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        'C:\\Users\\Kasarn\\Documents\\GitHub\\mockup\\src\\styles\\global.scss'
      ]
    },
    i18n: {
      locale: 'th',
      fallbackLocale: 'th',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  publicPath: ''
  // vuetify@1.5.14
}
