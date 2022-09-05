import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible"
import "nprogress"
import VueSocketIo from 'vue-socket.io'
import socketIo from "socket.io-client";
import moment from "moment";
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';

import { ActionSheet } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(ActionSheet);
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
import { NavBar } from 'vant';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
Vue.use(NavBar);
Vue.config.productionTip = false
import { Step, Steps } from 'vant';

Vue.use(Step);
Vue.use(Steps);
Vue.filter('dataFormat', (dataStr, pattern) => {
  return moment(dataStr).format(pattern)
})

// Vue.use(
//   new VueSocketIo({
//     debug: false,
//     connection: socketIo('http://127.0.0.1:3030', {
//       autoConnect: true
//     }),
//     extraHeaders: { 'Access-Control-Allow-Origin': '*' }
//   })
// )

new Vue({
  // connecting() {
  //   console.log('正在连接')
  // },
  // disconnect() {
  //   console.log('Socket 断开')
  // },
  // connect_failed() {
  //   console.log('连接失败')
  // },
  // connect() {
  //   console.log('socket connected')
  // },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
