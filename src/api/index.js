import tutors from "./db/tutors";

export default {
  fetchTutors() {
    return tutors;
  },
  fetchTutor(tutorId) {
    return tutors.find(tutor => tutor.id === Number(tutorId));
  }
};
