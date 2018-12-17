<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <my-profile :tutorId="tutorId"></my-profile>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from "./components/MyProfile.vue";

export default {
  name: "Tutor",
  props: ["tutorId"],
  components: {
    MyProfile
  }
};
</script>
