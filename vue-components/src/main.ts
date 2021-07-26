import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-ui
import ElementPlus from 'element-plus'
import './styles/element-variables.scss'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
