 <template>
  <v-card v-if="currentTutor">
    		 <h1>{{currentTutor.name}} chan is teaching </h1>
	  <v-container
    fluid
    grid-list-md>
      <v-layout row wrap>
      <v-flex xs6  v-for="course in myCourses()" v-bind:key="course.name">
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{course.name}}</div>
                    <div >{{course.price}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn  dark>Change</v-btn>
                </v-card-actions>
              </v-card>
      </v-flex>
		<v-flex xs12>
			<v-data-table
			:headers="headers"
			:items="currentTutor.availability"
			class="elevation-1"
			>
			<template slot="items" slot-scope="props">
			<td>{{ props.item.timeschedule }}</td>
    <td><v-checkbox v-model="props.item.monday"></v-checkbox></td>
    <td><v-checkbox v-model="props.item.tuesday"></v-checkbox></td>
		<td><v-checkbox v-model="props.item.wednesday"></v-checkbox></td>
    <td><v-checkbox v-model="props.item.thursday"></v-checkbox></td>
    <td><v-checkbox v-model="props.item.friday"></v-checkbox></td>
			</template>
			</v-data-table>
		</v-flex>
    
		<v-flex xs2 class="text-xs-center text-sm-left">
			<v-btn dark large router to="/tutor/1/create_course" color="indigo lighten-3">Create a course</v-btn>
		</v-flex>

    </v-layout>
	</v-container>
	</v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
      data: () => ({
      rating: 5, 
      headers: [
          {
            text: 'Time Schedule',
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
  name: "MyCourses",
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
    }
  },
  created() {
    this.fetchTutor(this.tutorId);
  },
    components: {
  }, 
  methods: {
    ...mapActions({
      fetchTutor: "tutors/FETCH_TUTOR"
    }),
		myCourses() {
			return this.tutor(this.tutorId).courses;
		}
  }
};
</script>

<style scoped lang="scss">
</style>
