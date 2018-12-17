import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import MyProfile from '@/views/Tutor'
import CreateCourse from '@/views/Tutor/CreateCourse'
import TutorSearchForStudents from '@/views/Tutor/TutorSearchForStudents'
import MyCourses from '@/views/Tutor/MyCourses'
import RequestStudent from '@/views/Tutor/RequestStudent'
import Tutors from '@/views/Tutors'
import CurrentCourses from '@/views/Student/CurrentCourses'
import RequestCourse from '@/views/Student/RequestCourse'
import StudentSearchForTutors from '@/views/Student/StudentSearchForTutors'
import TutorProfile from '@/views/Student/TutorProfile'
import AccountRecovery from '@/views/AccountManagement/AccountRecovery'
import NotSignedIn from '@/views/AccountManagement/NotSignedIn'
import SignIn from '@/views/AccountManagement/SignIn'
import SignUp from '@/views/AccountManagement/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },   
    {
      path: "/tutor/:tutorId",
      name: "MyProfile",
      component: MyProfile,
      props: true
    },    
    {
      path: "/tutor/:tutorId/create_course",
      name: "CreateCourse",
      component: CreateCourse,
      props: true
    },
    {
      path: "/tutor/:tutorId/search_students",
      name: "TutorSearchForStudents",
      component: TutorSearchForStudents,
      props: true
    },
    {
      path: "/tutor/:tutorId/my_courses",
      name: "MyCourses",
      component: MyCourses,
      props: true
    },
    {
      path: "/tutor/:tutorId/request_student",
      name: "RequestStudent",
      component: RequestStudent,
      props: true
    },
    {
      path: "/tutors",
      name: "tutors",
      component: Tutors,
      props: true
    },
    {
      path: "/student/:studentId/current_courses",
      name: "CurrentCourses",
      component: CurrentCourses,
      props: true
    },
    {
      path: "/student/:studentId/request_course",
      name: "RequestCourse",
      component: RequestCourse,
      props: true
    },
    {
      path: "/student/:studentId/search_tutor",
      name: "StudentSearchForTutors",
      component: StudentSearchForTutors,
      props: true
    },
    {
      path: "/tutor/:tutorId/profile",
      name: "TutorProfile",
      component: TutorProfile,
      props: true
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      props: true
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      props: true
    },
    {
      path: '/account_recovery',
      name: 'AccountRecovery',
      component: AccountRecovery,
      props: true
    }
  ]
});


