import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import YartuUIKit from "@yartu/ui-kit";
import router from '@/router'


createApp(App).use(router).use(YartuUIKit).mount('#app')
