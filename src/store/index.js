import Vue from "vue";
import Vuex from "vuex";
import tutors from "./modules/tutors";
import students from "./modules/students";
import courses from "./modules/courses";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tutors,
    students,
    courses
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
