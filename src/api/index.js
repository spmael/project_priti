import tutors from "./db/tutors";
import students from "./db/students";
import courses from "./db/courses";

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
  fetchStudents() {
    return students;
  },
  fetchStudent(studentId) {
    return students.find(student => student.id === Number(studentId));
  },
  fetchCourses() {
    return courses;
  },
  fetchCourses(courseId) {
    return courses.find(course => course.id === Number(courseId));
  },
};
