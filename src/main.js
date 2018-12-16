import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store';
import "vuetify/dist/vuetify.min.css";
import firebase from "firebase";
import Vuetify from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
})
//import './registerServiceWorker';

//*+ set firebase 

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyCZNea-LAMobpfvREtkB1zYhGP2693IxAw",
  authDomain: "priti-3621a.firebaseapp.com",
  databaseURL: "https://priti-3621a.firebaseio.com",
  projectId: "priti-3621a",
  storageBucket: "priti-3621a.appspot.com",
  messagingSenderId: "746077437719"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')