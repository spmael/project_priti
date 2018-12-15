<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <tutor-profile :tutorId="tutorId"></tutor-profile>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import TutorProfile from "./components/TutorProfile.vue";

export default {
  name: "Tutor",
  props: ["tutorId"],
  components: {
    TutorProfile
  }
};
</script>
