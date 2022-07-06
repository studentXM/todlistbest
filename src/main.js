import Vue from 'vue'

import {Input,Table,TableColumn,Checkbox,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import plugin from './plugin.js'


Vue.config.productionTip = false
Vue.use(plugin)
// element
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Checkbox)
Vue.use(Button)

new Vue({
  render: h => h(App),
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
