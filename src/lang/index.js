import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './modules/en'
import zh from './modules/zh'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages : {
        zh,en
    }
})

export default i18n