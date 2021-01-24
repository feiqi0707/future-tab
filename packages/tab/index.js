import FutureTab from './src/index.vue'

const install = function (Vue, config = {}) {
  if (install.installed) return

  Vue.component(FutureTab.name, FutureTab)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  FutureTab
}
