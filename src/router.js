import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ViewCourses from '@/views/Courses/ViewCourses'
import CreateCourse from '@/views/CreateCourse'
import Tutor from "@/views/Tutor";
import Tutors from "@/views/Tutors";
import MyCourses from "@/views/Tutor/MyCourses"
import CurrentCourses from "@/views/Student/CurrentCourses"
import Profile from '@/views/Users/Profile'
import SignUp from '@/views/Users/SignUp'
import SignIn from '@/views/Users/SignIn'
import AccountRecovery from '@/views/Users/AccountRecovery'


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
      path: '/courses',
      name: 'ViewCourses',
      component: ViewCourses
      
    },    
    {
      path: "/tutor/:tutorId/create_course",
      name: "CreateCourse",
      component: CreateCourse,
      props: true
    },
    {
      path: "/tutors",
      name: "tutors",
      component: Tutors
    },
    {
      path: "/tutor/:tutorId",
      name: "tutor",
      component: Tutor,
      props: true
    },
    {
      path: "/tutor/:tutorId/my_courses",
      name: "MyCourses",
      component: MyCourses,
      props: true
    },   
    {
      path: "/:studentId/current_courses",
      name: "CurrentCourses",
      component: CurrentCourses,
      props: true
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
      
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
      
    },
    {
      path: '/account_recovery',
      name: 'AccountRecovery',
      component: AccountRecovery

    }
  ]
});


