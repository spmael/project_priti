<template>
  <v-app>
    <!-- Navigation sidebar -->
    <v-navigation-drawer 
      v-model="sideNav"
      temporary
      fixed>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title"
        router 
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
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
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
        flat v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view/>
    </main>
    
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon:'library_books', title:'View Courses', link: '/courses'},
        { icon:'create', title:'Create Course', link: '/courses/new'},
        { icon:'school', title:'My Profile', link: '/profile'},
        { icon:'face', title:'Sign Up', link: '/signup'},
        { icon:'lock_open', title:'Sign In', link: '/signin'}
        ]
      }
    }
  }

</script>