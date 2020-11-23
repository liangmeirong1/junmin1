import Vue from 'vue'
import router from './router'
import store from './store'
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/icon/iconfont.css'
import './assets/icon/hot-icon/iconfont.css'
import './assets/icon/product-icon/iconfont.css'
import './assets/icon/xuqiu-icon/iconfont.css'
import './assets/icon/title-icon/iconfont.css'
import './assets/icon/xiangqing-icon/iconfont.css'
import './assets/icon/fasong-icon/iconfont.css'
import './assets/icon/dibu-icon/iconfont.css'
import './assets/icon/file-icon/iconfont.css'
import './assets/icon/new-work.icon/iconfont.css'
import './assets/icon/register-icon/iconfont.css'
import './assets/icon/team-icon/iconfont.css'
import './assets/icon/tianjia-icon/iconfont.css'
import './assets/icon/backtop-icon/iconfont.css'
import './assets/icon/page-icon/iconfont.css'
import './assets/icon/control-icon/iconfont.css'
import './assets/icon/search-icon/iconfont.css'
import SIdentify from './components/identify'

Vue.use(ELementUI)
Vue.use(SIdentify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
