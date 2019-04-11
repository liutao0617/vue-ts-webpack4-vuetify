// https://vuex.vuejs.org/en/modules.html

const requireModule = require.context('.', true, /\.ts$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.ts') return

  // Replace ./ and .js
  const path = fileName.replace(/(\.\/|\.ts)/g, '')
  const [moduleName, imported] = path.split('/')

  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true
    }
  }

  modules[moduleName][imported] = requireModule(fileName).default
})

export default modules
