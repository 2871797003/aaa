import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/iconfont.css'
import axios from 'axios'
import i18n from './lang/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

