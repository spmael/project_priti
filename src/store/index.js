import Vue from "vue";
import Vuex from "vuex";
import tutors from "./modules/tutors";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tutors
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
