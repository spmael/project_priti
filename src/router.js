import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewCourses from '@/components/Courses/ViewCourses'
import CreateCourse from '@/components/Courses/CreateCourse'
import Profile from '@/components/Users/Profile'
import SignUp from '@/components/Users/SignUp'
import SignIn from '@/components/Users/SignIn'


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
      path: '/signup',
      name: 'SignUp',
      component: SignUp
      
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
      
    }
  ]
});


