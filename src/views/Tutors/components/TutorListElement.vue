<template>
  <v-card
    hover
    width="200px"
    height="300px"
    :to="`/tutors/${tutor.id}`"
  >
  <v-container
  fluid
  grid-list-md
  >
    <v-img
      :src="tutorImage"
      width="100%"
    >
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline">{{tutor.name}}</div>    
        <div><v-icon>map</v-icon>{{tutor.country}}</div>
        <div><v-icon>language</v-icon>{{tutor.nativeLanguage}}</div>
        <div><v-icon>attach_money</v-icon>{{tutor.price}}</div>
        <div><v-icon>school</v-icon>{{tutor.course.name}}</div>
      </div>
    </v-card-title>
  </v-container>
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
