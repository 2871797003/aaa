import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/modules.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    msg : 'hello world'
  },
  getters : {
    getisLogin (state) {
      return state.msg
    }
  },
  mutations: {
    changeLogin (state,pacyload) {
      state.isLogin = pacyload
    }
  },
  actions: {
    getUserInfo () {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(1)
          resolve()
        },0 )
      })
    },
    getIDCard () {
      console.log(2)
    }
  },
  modules: {
    modules
  }
})
