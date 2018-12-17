<template>
  <v-card>
    <v-card-title>
      <h1>Courses in Biology</h1>
    </v-card-title>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="tutor in tutors"
          :key="tutor.id"
        >
          <available-tutor-list-element :tutor="tutor"></available-tutor-list-element>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import AvailableTutorListElement from "./AvailableTutorListElement.vue";

export default {
  name: "AvailableTutorList",
  components: {
    AvailableTutorListElement
  },
  props: {
    tutors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>
