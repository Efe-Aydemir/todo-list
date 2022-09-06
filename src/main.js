import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import YartuUIKit from "@yartu/ui-kit";
import router from '@/router'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyB2n3u-CGq8DnusEwQZ-AZs0nw4yOruVFc",
    authDomain: "todolist-4b736.firebaseapp.com",
    projectId: "todolist-4b736",
    storageBucket: "todolist-4b736.appspot.com",
    messagingSenderId: "697822777756",
    appId: "1:697822777756:web:facebc131d4251fa9d7859",
    measurementId: "G-ZG238ZLKS6"
  };

firebase.initializeApp(firebaseConfig)


createApp(App).use(router).use(YartuUIKit).mount('#app')
