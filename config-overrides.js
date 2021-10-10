/*eslint-disable */
const rewireAlias = require('react-app-rewire-alias')

module.exports = function override(config) {
  return rewireAlias.alias({
    components: 'src/components',
    assets: 'src/assets',
    styles: 'src/styles',
    general: 'src/general',
    context: 'src/context',
    services: 'src/services',
    configs: 'src/configs',
    models: 'src/models',
  })(config)
}
