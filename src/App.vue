<template>
  <v-app>
        <!-- Navigation minimized -->
    <v-navigation-drawer 
      v-model="sideNav"
      temporary
      fixed>
      <v-list>
        <v-list-tile v-for="item in currentMenu()" :key="item.title"
        router 
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="isLoggedIn"
          v-on:click="signOut(0)">
          <v-list-tile-action> 
            <v-icon left>toggle_off</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Sign Out
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Navigation bar -->
    <v-toolbar dark class="indigo lighten-2">
      <v-toolbar-side-icon 
        @click="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">PriTi</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn 
        flat 
        v-for="item in currentMenu()" 
        :key="item.title"
        router
        :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>      
        <v-btn 
        flat 
        v-if="isLoggedIn"
        v-on:click="signOut(0)">
          <v-icon left>toggle_off</v-icon>
          Sign Out
        </v-btn>  
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view/>
    </main>
    
  </v-app>
</template>

<script>
import firebase from  "firebase";

export default {
  data() {
    return {
      sideNav: false,
      isLoggedIn: false,
      loggedOutMenu: [

        { icon:'face', title:'Sign Up', link: '/signup'},
        { icon:'lock_open', title:'Sign In', link: '/signin'}
        ],
        loggedInMenu: [
        { icon:'library_books', title:'View Courses', link: '/tutor/1/my_courses'},
        { icon:'create', title:'Create Course', link: '/tutor/1/create_course'},
        { icon:'school', title:'My Profile', link: '/tutor/1'},
        ]
      }
    },      
    created(){
      firebase.auth().onAuthStateChanged(user =>{
        if (user) {
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      })        
    },
    methods: {
      signOut: function() {
        firebase.auth().signOut().then(() => {
          this.$router.push('/')
        })
      },
      currentMenu: function() {
        if  (this.isLoggedIn)
          return this.loggedInMenu;
        else
          return this.loggedOutMenu; 
      }
    }
  }

</script>