import Vue from 'vue'
import App from './App'

//uView
import uView from "uview-ui"
Vue.use(uView)

//request
import MinRequest from './utils/request.js'
import minRequest from './utils/api.js'
Vue.use(MinRequest)

// 注册缓存器
import MinCache from './utils/cache.js'
Vue.use(MinCache)
Vue.use(MinCache, { timeout: 6000 })

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  minRequest
})
app.$mount()
