import Vue from "vue";
import api from "@/api";

const courses = {
  namespaced: true,
  state: {
    courses: {},
  },
  actions: {
    FETCH_COURSES({ commit }) {
      const response = api.fetchCourses();
      commit("RECEIVE_COURSES", response);
    },
    FETCH_COURSE({ commit }, uid) {
      const response = api.fetchCourse(uid);
      commit("RECEIVE_COURSE", response);
    }
  },
  getters: {
    ALL_COURSES(state) {
      return Object.values(state.courses);
    },
    COURSE(state) {
      return id => state.courses[Number(id)];
    }
  },
  mutations: {
    RECEIVE_COURSES(state, courses) {
      courses.forEach(course => {
        if (course) {
          Vue.set(state.courses, course.id, course);
        }
      });
    },
    RECEIVE_COURSE(state, course) {
      if (course) {
        Vue.set(state.courses, course.id, course);
      }
    }
  }
};

export default courses;
