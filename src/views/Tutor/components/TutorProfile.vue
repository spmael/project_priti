<template>
    <v-container>
      <v-card v-if="currentTutor">
        <v-layout row wrap>
          <v-flex xs3>
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
                  <div class="dtext-xs-center"><v-rating v-model="rating"></v-rating></div>
                </v-card-title>  
                          
              </v-layout>
            </v-img>
          </v-flex>
          <v-flex xs3> 
            <p class="text-xs-center display-1">{{currentTutor.country}}</p>
            <p class="text-xs-center display-1">{{currentTutor.nativeLanguage}}</p>
            <p class="text-xs-center display-1">{{currentTutor.course.name}}</p>
            <p class="text-xs-center display-1">{{currentTutor.price}}</p> 
            message here!  
          </v-flex>

          <v-flex xs6>
            <v-card>
              <Map />
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card>
              <v-card-title>
                Tutor Bio
              </v-card-title>
              <p class="text-xs-center">{{currentTutor.bio}}</p>
            </v-card>
          </v-flex>

          <v-flex xs6>
            <v-card>
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
      </v-card>
    </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Map from "@/components/Map.vue";

export default {
      data: () => ({
      rating: 5, 
      headers: [
          {
            text: 'Time Slot',
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
    components: {
    Map
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
