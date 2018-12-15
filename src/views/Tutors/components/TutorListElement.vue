<template>
  <v-card
    hover
    width="200px"
    :to="`/tutors/${tutor.id}`"
  >
    <v-img
      :src="tutorImage"
      height="256px"
    >
    </v-img>

    <v-card-actions>
      <v-icon>person</v-icon>
      <v-card-title v-text="tutor.name"></v-card-title>
    </v-card-actions>

    <v-card-actions>
      <v-icon>email</v-icon>
      <v-card-title v-text="tutor.email"></v-card-title>
    </v-card-actions>
    
    <v-card-actions>
      <v-icon>people</v-icon>
      <v-card-title v-if="tutor.course" v-text="tutor.course.name"></v-card-title>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "TutorListElement",
  props: {
    tutor: Object
  },
  computed: {
    tutorImage() {
      return this.tutor.image ? this.tutor.image : "https://stmichaelsknightsofcolumbus.com/wordpress/wp-content/uploads/2013/08/Photo-not-available.jpg";
    }
  }
};
</script>

<style scoped lang="scss">
</style>
