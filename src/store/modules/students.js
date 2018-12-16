import Vue from "vue";
import api from "@/api";

const students = {
  namespaced: true,
  state: {
    students: {},
  },
  actions: {
    FETCH_STUDENTS({ commit }) {
      const response = api.fetchTutors();
      commit("RECEIVE_STUDENTS", response);
    },
    FETCH_STUDENT({ commit }, uid) {
      const response = api.fetchStudent(uid);
      commit("RECEIVE_STUDENT", response);
    }
  },
  getters: {
    ALL_STUDENTS(state) {
      return Object.values(state.students);
    },
    STUDENT(state) {
      return id => state.student[Number(id)];
    }
  },
  mutations: {
    RECEIVE_STUDENTS(state, students) {
      students.forEach(student => {
        if (student) {
          Vue.set(state.students, student.id, student);
        }
      });
    },
    RECEIVE_STUDENT(state, student) {
      if (student) {
        Vue.set(state.students, student.id, student);
      }
    }
  }
};

export default students;
