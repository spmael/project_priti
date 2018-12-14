import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ViewCourses from '@/views/Courses/ViewCourses'
import CreateCourse from '@/views/Courses/CreateCourse'
import Tutor from "@/views/Tutor";
import Tutors from "@/views/Tutors";
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
      path: '/courses/new',
      name: 'CreateCourse',
      component: CreateCourse
      
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
      
    },
    {
      path: "/tutors",
      name: "tutors",
      component: Tutors
    },
    {
      path: "/tutors/:tutorId",
      name: "tutor",
      component: Tutor,
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


