import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Button from 'ant-design-vue/lib/button';
import Input from 'ant-design-vue/lib/input';
import Icon from 'ant-design-vue/lib/icon';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Icon);
Vue.use(Button);
Vue.use(Input);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
