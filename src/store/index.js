import Vue from "vue";
import Vuex from "vuex";
import tutors from "./modules/tutors";
import stores from "./modules/stores";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tutors,
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
