import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import plugin from './plugin.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(plugin);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
