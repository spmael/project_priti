<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <create-course :tutorId="tutorId"></create-course>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateCourse from "./components/CreateCourse.vue";

export default {
  name: "Tutor",
  props: ["tutorId"],
  components: {
    CreateCourse
  }
};
</script>
