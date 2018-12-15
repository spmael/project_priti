<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="tutor in tutors"
          :key="tutor.id"
        >
          <tutor-list-element :tutor="tutor"></tutor-list-element>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import TutorListElement from "./TutorListElement.vue";

export default {
  name: "TutorList",
  components: {
    TutorListElement
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
