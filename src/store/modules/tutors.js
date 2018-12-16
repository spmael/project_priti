import Vue from "vue";
import api from "@/api";

const tutors = {
  namespaced: true,
  state: {
    tutors: {},
  },
  actions: {
    FETCH_TUTORS({ commit }) {
      const response = api.fetchTutors();
      commit("RECEIVE_TUTORS", response);
    },
    FETCH_TUTOR({ commit }, uid) {
      const response = api.fetchTutor(uid);
      commit("RECEIVE_TUTOR", response);
    },
    FETCH_TUTOR_LOCATIONS({ commit }, uid) {
      const response = api.fetchTutorLocations(uid);
      commit("RECEIVE_TUTOR_LOCATIONS", response);
    }
  },
  getters: {
    ALL_TUTORS(state) {
      return Object.values(state.tutors);
    },
    TUTOR(state) {
      return id => state.tutors[Number(id)];
    },
    TUTOR_LOCATIONS(state) {
      return id => state.tutors[Number(id)].locations;
    }
  },
  mutations: {
    RECEIVE_TUTORS(state, tutors) {
      tutors.forEach(tutor => {
        if (tutor) {
          Vue.set(state.tutors, tutor.id, tutor);
        }
      });
    },
    RECEIVE_TUTOR(state, tutor) {
      if (tutor) {
        Vue.set(state.tutors, tutor.id, tutor);
      }
    },
    RECEIVE_TUTOR_LOCATIONS(state, tutor) {
      if (tutor) {
        Vue.set(state.tutors, tutor.id, tutor);
      }
    }
  }
};

export default tutors;
