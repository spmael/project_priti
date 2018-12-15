<template>
  <v-layout row v-if="currentTutor">
    <v-flex xs30 sm50 offset-sm3>
      <v-card>
        <!---*+ move to center-->
        <v-img
            :src="currentTutor.image"
            height="300px"
            width="300px"
        >
          <v-layout
              column
              fill-height
          >
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{ currentTutor.name }}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <div class="text-xs-center">
          <v-rating v-model="rating"></v-rating>
        </div>  
        <v-data-table
        :headers="headers"
        :items="currentTutor.availability"
        class="elevation-1"
        >
          <template slot="items" slot-scope="props">
          <td>{{ props.item.timeslot }}</td>
          <td class="text-xs-right">{{ props.item.monday }}</td>
          <td class="text-xs-right">{{ props.item.tuesday }}</td>
          <td class="text-xs-right">{{ props.item.wednesday}}</td>
          <td class="text-xs-right">{{ props.item.thursday }}</td>
          <td class="text-xs-right">{{ props.item.friday }}</td>
          </template>
        </v-data-table>


      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
      data: () => ({
      rating: 5, 
      headers: [
          {
            text: 'Time / Day of the week',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Mon', value: 'monday' },
          { text: 'Tue', value: 'tuesday' },
          { text: 'Wed', value: 'wednesday' },
          { text: 'Thu', value: 'thursday' },
          { text: 'Fri', value: 'friday' }
        ]
    }),
  name: "TutorProfile",
  props: {
    tutorId: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters({
      tutor: "tutors/TUTOR"
    }),
    currentTutor() {
      return this.tutor(this.tutorId);
    },
    tutorImage() {
      return this.tutor.image ? this.tutor.image : "https://stmichaelsknightsofcolumbus.com/wordpress/wp-content/uploads/2013/08/Photo-not-available.jpg";
    }
  },
  created() {
    this.fetchTutor(this.tutorId);
  },
  methods: {
    ...mapActions({
      fetchTutor: "tutors/FETCH_TUTOR"
    })
  }
};
</script>

<style scoped lang="scss">
</style>
