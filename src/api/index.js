import tutors from "./db/tutors";
import students from "./db/students";

export default {
  fetchTutors() {
    return tutors;
  },
  fetchTutor(tutorId) {
    return tutors.find(tutor => tutor.id === Number(tutorId));
  },
  fetchTutorLocations(tutorId)
  {
    return tutors.find(tutor => tutor.id === Number(tutorId)).location;
  },
  fetchStudent(studentId) {
    return students.find(student => student.id === Number(studentId));
  },
};
