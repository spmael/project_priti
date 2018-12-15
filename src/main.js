import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '@/store';

//*+ set firebase 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import "vuetify/dist/vuetify.min.css";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCZNea-LAMobpfvREtkB1zYhGP2693IxAw",
  authDomain: "priti-3621a.firebaseapp.com",
  databaseURL: "https://priti-3621a.firebaseio.com",
  projectId: "priti-3621a",
  storageBucket: "priti-3621a.appspot.com",
  messagingSenderId: "746077437719"
};
firebase.initializeApp(config);
Vue.use(Vuetify);
Vue.filter("date", convertDateToString);