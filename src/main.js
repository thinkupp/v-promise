import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

import './service/index'
import './component/index'

Array.prototype.deepCopy = function () {
  return JSON.parse(JSON.stringify(this))
}

// 定义插件
const somePlugin = {
  install: function () {
    Vue.mixin({
      onUnload() {
        if( this.$options.data ) {
          Object.assign(this.$data, this.$options.data());
        }
      }
    })
  }
}
// 使用插件
Vue.use(somePlugin)

const app = new Vue(App)

app.$mount()
