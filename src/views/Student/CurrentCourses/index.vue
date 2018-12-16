<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <current-courses :studentId="studentId"></current-courses>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentCourses from "./components/CurrentCourses.vue";

export default {
  name: "Student",
  props: ["studentId"],
  components: {
    CurrentCourses
  }
};
</script>
