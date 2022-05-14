/*
 * @Author: caiwenkai
 * @Date: 2022-05-12 16:11:51
 * @LastEditors: caiwenkai
 * @LastEditTime: 2022-05-14 13:10:57
 * @Discription: 
 * @FilePath: \rrweb-video\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.css';

import leaderPage from './components/leaderPage.vue'

Vue.component("leaderPage", leaderPage)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
