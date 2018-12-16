<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <my-courses :tutorId="tutorId"></my-courses>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCourses from "./components/MyCourses.vue";

export default {
  name: "Tutor",
  props: ["tutorId"],
  components: {
    MyCourses
  }
};
</script>
