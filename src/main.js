import Vue from 'vue'
import App from './App.vue'
import Button from 'ant-design-vue/lib/button';
import Input from 'ant-design-vue/lib/input';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Input);
new Vue({
  render: h => h(App),
}).$mount('#app')
